import {Route, Routes} from "react-router-dom";
import MainPage from "../../pages/MainPage.jsx";
import NotFoundPage from "../../pages/NotFoundPage.jsx";
import PrivateRoute from "../../pages/PrivateRoute.jsx";
import {useCallback, useState} from "react";
import LogoutPage from "../../pages/LogoutPage.jsx";
import NewCardPage from "../../pages/NewCardPage.jsx";
import CardPage from "../../pages/CardPage.jsx";
import SignInPage from "../../pages/SignInPage.jsx";
import SignUpPage from "../../pages/SignUpPage.jsx";
import DeleteTaskPage from "../../pages/DeleteTaskPage.jsx";
import {fetchTasks} from "../../services/api.js";

function AppRoutes() {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const [isAuth, setIsAuth] = useState(userInfo);
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('');

    const getTasks = useCallback(async () => {
        try {
            setLoading(true);

            const userInfo = JSON.parse(localStorage.getItem("userInfo"));

            const data = await fetchTasks({
                token: userInfo.token,
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

    return (
        <Routes>
            <Route element={<PrivateRoute isAuth={isAuth} />}>
                {/* Главная страница */}
                <Route path="/" element={<MainPage tasks={tasks} loading={loading} getTasks={getTasks} error={error}/>} >
                    <Route path="/logout" element={<LogoutPage setIsAuth={setIsAuth} />} />
                    <Route path="/card/add" element={<NewCardPage updateTasks={getTasks} />} />
                    <Route path="/card/:id" element={<CardPage tasks={tasks} updateTasks={getTasks} />} >
                        <Route path="/card/:id/delete" element={<DeleteTaskPage updateTasks={getTasks} />} />
                    </Route>
                </Route>
            </Route>
            {/* Страница входа */}
            <Route path="/sign-in" element={<SignInPage setIsAuth={setIsAuth} />} />
            {/* Страница регистрации */}
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default AppRoutes;