import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal } from '@mui/material';

import listStyle from '../../styles/list.module.css';
import modalListStyle from '../../styles/modalList.module.css';

const ReportComp = () => {
    const [list, setList] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [member, setMember] = useState([]);
    const [modalLoading, setModalLoading] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8090/memberReportList')
            .then(res => {
                setList(res.data);
                console.log('API 응답', res.data);
            })
            .catch(error => {
                console.error('에러 발생', error);
                setError('데이터를 불러오는 중 오류가 발생했습니다.');
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString('ko-KR', options);
    };

    const openModal = (memberEmail) => {
        setError(null);
        setModalLoading(true);
        axios.get(`http://localhost:8090/member/${memberEmail}`)
            .then(res => {
                setMember(res.data);
                setModalOpen(true);
            })
            .catch(error => {
                console.error('에러 발생', error);
                setError('데이터를 불러오는 중 오류가 발생하였습니다.');
            })
            .finally(() => {
                setModalLoading(false);
            });
    };

    const closeModal = () => {
        setModalOpen(false);
        setMember(null);
    };

    const onStop = (memberEmail) => {
        console.log(`정지/해지 버튼 클릭: ${memberEmail}`);
    };

    if (loading) {
        return <div>로딩 중...</div>;
    }

    return (
        <>
            <div className={listStyle.head}>
                <h2>신고내역</h2>
            </div>
            {error ? (
                <div className={listStyle.error}>{error}</div>
            ) : (
                <table className={listStyle.table}>
                    <thead>
                        <tr>
                            <th>신고자</th>
                            <th>피신고자</th>
                            <th>사유</th>
                            <th>내용</th>
                            <th>날짜</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.length > 0 ? (
                            list.map(item => (
                                <tr key={item.reportId} className={listStyle.list}>
                                    <td>
                                        <button onClick={() => openModal(item.reporterEmail)}>
                                            {item.reporterEmail}
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => openModal(item.reportedEmail)}>
                                            {item.reportedEmail}
                                        </button>
                                    </td>
                                    <td>{item.reportReason}</td>
                                    <td>{item.reportContent}</td>
                                    <td>{formatDate(item.reportDate)}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">데이터가 없습니다.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}
            <Modal open={modalOpen} onClose={closeModal}>
                <div className={modalListStyle.modalContent}>
                    {modalLoading ? (
                        <p>로딩 중...</p>
                    ) : member ? (
                        <>
                            <div className={modalListStyle.modalhead}>
                                <h2>회원정보</h2>
                            </div>
                            <table className={modalListStyle.table}>
                                <thead>
                                    <tr>
                                        <th>이메일</th>
                                        <th>이름</th>
                                        <th>닉네임</th>
                                        <th>사유</th>
                                        <th>내용</th>
                                        <th>신고 횟수</th>
                                        <th>정지/해지</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {member.length > 0 ? (
                                    member.map(item => (
                                        <tr key={item.memberId} className={modalListStyle.list}>
                                            <td>{item.email}</td>
                                            <td>{item.memberName}</td>
                                            <td>{item.memberNickName}</td>
                                            <td>{item.reportReason}</td>
                                            <td>{item.reportContent}</td>
                                            <td>{item.reportCount}</td>
                                            <td>
                                                <button className={modalListStyle.button} onClick={() => onStop(item.memberId)}>
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
                    ) : (
                        <p>데이터를 불러오지 못했습니다.</p>
                    )}
                </div>
            </Modal>
        </>
    );
};

export default ReportComp;
