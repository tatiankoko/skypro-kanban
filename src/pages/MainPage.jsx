import {WrapperStyled} from "../components/Wrapper.styled.js";
import Header from "../components/header/Header.jsx";
import Main from "../components/main/Main.jsx";
import {Outlet} from "react-router-dom";

const MainPage = ({loading, error}) => {
    return (
        <WrapperStyled>
            <Header />
            <Main error={error} loading={loading} />
            <Outlet />
        </WrapperStyled>
    )
}

export default MainPage;