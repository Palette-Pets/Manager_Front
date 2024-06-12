import React, { useEffect, useState } from 'react';
import axios from 'axios';

import memberStyle from '../../styles/memberList.module.css';

const MemberListcomp = () => {
    const [list, setList] = useState([]);
    const [showStopped, setShowStopped] = useState(false); // 새로운 상태 추가

    useEffect(() => {
        axios.get(`http://localhost:8090/memberList`)
        .then(res => {
            setList(res.data);
            console.log('API 응답', res.data);
        })
        .catch(error => console.log('에러 발생', error));
    }, []);

    const onStop = (memberId) => {
        axios.put(`http://localhost:8090/stopMember/${memberId}`)
        .then(res => {
            // 상태 업데이트
            setList(prevList => 
                prevList.map(member =>
                    member.memberId === memberId ? { ...member, deleted: !member.deleted } : member
                )
            );
            console.log('API 응답', res.data);
        })
        .catch(error => console.log('에러 발생', error));
    }

    const toggleShowStopped = () => {
        setShowStopped(!showStopped);
    }

    // 필터링된 리스트
    const filteredList = showStopped ? list.filter(member => member.deleted) : list;

    return (
        <>
            <div className={memberStyle.head}>
                <h2>회원정보</h2>
                <button onClick={toggleShowStopped}>
                    {showStopped ? '전체 보기' : '정지된 회원'}
                </button>
            </div>
            <table className={memberStyle.table}>
                <thead>
                    <tr>
                        <th>이메일</th>
                        <th>이름</th>
                        <th>닉내임</th>
                        <th>주소</th>
                        <th>생일</th>
                        <th>휴대폰</th>
                        <th>비고</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredList.length > 0 ? (
                        filteredList.map(item => (
                            <tr key={item.memberId} className={memberStyle.list}>
                                <td>{item.email}</td>
                                <td>{item.memberName}</td>
                                <td>{item.memberNickName}</td>
                                <td>{item.memberAddress}</td>
                                <td>{item.memberBirth}</td>
                                <td>{item.memberPhone}</td>
                                <td>
                                    <button className={memberStyle.button} onClick={() => onStop(item.memberId)}>
                                        {item.deleted ? '해지' : '정지'}
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7">데이터가 없습니다.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};

export default MemberListcomp;
