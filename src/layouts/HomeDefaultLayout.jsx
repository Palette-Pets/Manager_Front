import HomeHeader from "./HomeHeader.jsx";
import Footer from "./Footer.jsx";

const DefaultLayout = ({ children }) => {

    return (
        <>
            <HomeHeader />
            {children}
            <Footer/>
        </>
    );
}

export default DefaultLayout;