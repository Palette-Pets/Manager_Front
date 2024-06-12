import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import ReportComp from '../components/memberReportPage/ReportComp';

const MemberReportPage = () => {
    return (
        <>
            <DefaultLayout>
                <ReportComp/>
            </DefaultLayout>
        </>
    );
};

export default MemberReportPage;