import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MemberListcomp = () => {
    const [list, setList] = useState([]);

    const { page } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8090/memberList`)
            .then(res => {
                setList(res.data);
                console.log('API 응답', res.data);
            })
            .catch(error => console.log('에러 발생', error));
    }, [page]);

    return (
        <>
            <table border='1' frame='hsides' role='rows'>
                <thead>
                    <tr>
                        <th>이메일</th>
                        <th>이름</th>
                        <th>닉내임</th>
                        <th>주소</th>
                        <th>생일</th>
                        <th>휴대폰</th>
                    </tr>
                </thead>
                <tbody>
                    {list.length > 0 ? (
                        list.map(item => (
                            <tr key={item.memberId}>
                                <td>{item.email}</td>
                                <td>{item.memberName}</td>
                                <td>{item.memberNickName}</td>
                                <td>{item.memberAddress}</td>
                                <td>{item.memberBirth}</td>
                                <td>{item.memberPhone}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">데이터가 없습니다.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};

export default MemberListcomp;
