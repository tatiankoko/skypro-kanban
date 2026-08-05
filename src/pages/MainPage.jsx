import {WrapperStyled} from "../components/Wrapper.styled.js";
import Header from "../components/header/Header.jsx";
import Main from "../components/main/Main.jsx";
import {Outlet} from "react-router-dom";

const MainPage = ({setIsAuth}) => {
    return (
        <WrapperStyled>
            <Header setIsAuth={setIsAuth} />
            <Main />
            <Outlet />
        </WrapperStyled>
    )
}

export default MainPage;