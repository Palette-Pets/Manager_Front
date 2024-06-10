import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const DefaultLayout = ({ children }) => {

    return (
        <>
            <br/>
            <br/>
            <Header />
            {children}
            <Footer/>
            <br/>
            <br/>
        </>
    );
}

export default DefaultLayout;