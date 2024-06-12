import React, { useEffect, useState } from 'react';
import listStyle from '../../styles/list.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ReportComp = () => {
    const [list, setList] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8090/memberReportList')
            .then(res => {
                setList(res.data);
                console.log('API 응답', res.data);
            })
            .catch(error => {
                console.error('에러 발생', error);
                setError('데이터를 불러오는 중 오류가 발생했습니다.');
            });
    }, []);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString('ko-KR', options);
    };

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
                                        <Link>
                                            {item.reporterEmail}
                                        </Link>
                                    </td>
                                    <td>
                                        <Link>
                                            {item.reportedEmail}
                                        </Link>
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
        </>
    );
};

export default ReportComp;
