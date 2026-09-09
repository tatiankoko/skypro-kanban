import {WrapperStyled} from "../components/Wrapper.styled.js";
import Header from "../components/header/Header.jsx";
import Main from "../components/main/Main.jsx";
import {Outlet} from "react-router-dom";
import {useEffect} from "react";

const MainPage = ({tasks, loading, getTasks, error}) => {
    useEffect(() => {
        getTasks();
    }, [getTasks]);

    return (
        <WrapperStyled>
            <Header />
            <Main error={error} tasks={tasks} loading={loading} />
            <Outlet />
        </WrapperStyled>
    )
}

export default MainPage;