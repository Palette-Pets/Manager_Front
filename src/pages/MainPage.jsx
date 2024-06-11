import MainComp from "../components/mainPage/Maincomp.jsx";
import DefaultLayout from "../layouts/DefaultLayout.jsx";

const MainPage = () => {
    return (
        <>
            <DefaultLayout>
                <br/>
                <MainComp/>
            </DefaultLayout>
        </>
    )
}

export default MainPage;