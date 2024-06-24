import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {url} from '../../utils/single';

import listStyle from '../../styles/list.module.css';

const MemberListcomp = () => {
    const [list, setList] = useState([]);
    const [showStopped, setShowStopped] = useState(false); 

    useEffect(() => {
        axios.get(`${url}/memberList`)
        .then(res => {
            setList(res.data);
            console.log('API 응답', res.data);
        })
        .catch(error => console.log('에러 발생', error));
    }, []);

    const onStop = (memberId) => {
        axios.put(`${url}/stopMember/${memberId}`)
        .then(res => {
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

    const filteredList = showStopped ? list.filter(member => member.deleted) : list;

    return (
        <>
            <div className={listStyle.head}>
                <h2>회원정보</h2>
                <button onClick={toggleShowStopped}>
                    {showStopped ? '전체 보기' : '정지된 회원'}
                </button>
            </div>
            <table className={listStyle.table}>
                <thead>
                    <tr>
                        <th>이메일</th>
                        <th>이름</th>
                        <th>닉내임</th>
                        <th>주소</th>
                        <th>생일</th>
                        <th>휴대폰</th>
                        <th>신고</th>
                        <th>활동/정지</th>
                    </tr>
                </thead>
                <tbody className={listStyle.list}>
                    {filteredList.length > 0 ? (
                        filteredList.map(item => (
                            <tr key={item.memberId} >
                                <td>{item.email}</td>
                                <td>{item.memberName}</td>
                                <td>{item.memberNickName}</td>
                                <td>{item.memberAddress}</td>
                                <td>{item.memberBirth}</td>
                                <td>{item.memberPhone}</td>
                                <td>{item.reportCount}</td>
                                <td>
                                    <button className={listStyle.button} onClick={() => onStop(item.memberId)} style={{backgroundColor: item.deleted ? 'red' : ''}}>
                                        {item.deleted ? '정지' : '활동'}
                                    </button>
                                </td>
                            </tr>                           
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8">데이터가 없습니다.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};

export default MemberListcomp;
