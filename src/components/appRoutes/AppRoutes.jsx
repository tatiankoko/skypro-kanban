import {Route, Routes} from "react-router-dom";
import MainPage from "../../pages/MainPage.jsx";
import NotFoundPage from "../../pages/NotFoundPage.jsx";
import PrivateRoute from "../../pages/PrivateRoute.jsx";
import {useCallback, useContext, useEffect, useState} from "react";
import LogoutPage from "../../pages/LogoutPage.jsx";
import NewCardPage from "../../pages/NewCardPage.jsx";
import CardPage from "../../pages/CardPage.jsx";
import SignInPage from "../../pages/SignInPage.jsx";
import SignUpPage from "../../pages/SignUpPage.jsx";
import DeleteTaskPage from "../../pages/DeleteTaskPage.jsx";
import {fetchTasks} from "../../services/api.js";
import AuthContext from "../../context/AuthContext.jsx";
import TasksContext from "../../context/TaskContext.jsx";

function AppRoutes() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('');
    const {user} = useContext(AuthContext);
    const {setTasks} = useContext(TasksContext);

    const getTasks = useCallback(async () => {
        try {
            setLoading(true);

            const data = await fetchTasks({
                token: user.token,
            });

            if (data) {
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
        <Routes>
            <Route element={<PrivateRoute />}>
                {/* Главная страница */}
                <Route path="/" element={<MainPage loading={loading} error={error}/>} >
                    <Route path="/logout" element={<LogoutPage />} />
                    <Route path="/card/add" element={<NewCardPage />} />
                    <Route path="/card/:id" element={<CardPage />} >
                        <Route path="/card/:id/delete" element={<DeleteTaskPage />} />
                    </Route>
                </Route>
            </Route>
            {/* Страница входа */}
            <Route path="/sign-in" element={<SignInPage />} />
            {/* Страница регистрации */}
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default AppRoutes;