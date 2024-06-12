import {lazy, Suspense} from "react";
import {createBrowserRouter} from "react-router-dom";

const Loading = () => <>Loading...</>;
const MainPage = lazy(() => import('./../pages/MainPage'));
const MemberListPage = lazy(() => import('./../pages/MemberListPage'));
const MemberReportPage = lazy (() => import('../pages/MemberReportPage'));

const root = createBrowserRouter([
    {
        path:"/",
        element: <Suspense fallback={<Loading />}><MainPage/></Suspense>
    },

    {
        path:"/memberList",
        element: <Suspense fallback={<Loading />}><MemberListPage/></Suspense>,
    },

    {
        path:"/reportList",
        element: <Suspense fallback={<Loading />}><MemberReportPage/></Suspense>,
    },
]);

export default root;