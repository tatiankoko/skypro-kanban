import {WrapperStyled} from "../components/Wrapper.styled.js";
import Header from "../components/header/Header.jsx";
import Main from "../components/main/Main.jsx";
import {Outlet} from "react-router-dom";
import {fetchTasks} from "../services/api.js";
import {useCallback, useEffect, useState} from "react";

const MainPage = () => {
    const [loading, setLoading] = useState(true)
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState('');

    const getTasks = useCallback(async () => {
        try {
            setLoading(true);

            const userInfo = JSON.parse(localStorage.getItem("userInfo"));

            const data = await fetchTasks({
                token: userInfo.token,
            });

            if (data) {
                console.log(data)
                setTasks(data);
            }
        } catch (err) {
            setError(err.message);
            console.log(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

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