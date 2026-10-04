import Column from "../column/Column.jsx";
import {MainBlock, MainContent, MainPlaceholder, MainStyled} from "./Main.styled.js";
import {ContainerStyled} from "../Container.styled.js";
import {ErrorMessage} from "../Notification.styled.js";
import {status} from "../../status.js";
import {useCallback, useEffect, useState} from "react";
import {useTasks} from "../../context/TaskContext.jsx";
import {fetchTasks} from "../../services/api.js";
import {useAuth} from "../../context/AuthContext.jsx";

const Main = () => {
    const [loading, setLoading] = useState(true)
    const {tasks, setTasks} = useTasks();
    const {user} = useAuth();
    const [error, setError] = useState('');

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
        <MainStyled>
            <ContainerStyled>
                <MainBlock>
                    <MainContent>
                        <Column title={status.none} loading={loading}/>
                        <Column title={status.todo} loading={loading}/>
                        <Column title={status.process} loading={loading}/>
                        <Column title={status.testing} loading={loading}/>
                        <Column title={status.done} loading={loading}/>
                    </MainContent>
                    {
                        loading
                            ? <MainPlaceholder>Идет загрузка задач...</MainPlaceholder>
                            : tasks?.length === 0
                                ? <MainPlaceholder>Пока нет задач</MainPlaceholder>
                                : null
                    }
                    {
                        error
                            ? <ErrorMessage>{error}</ErrorMessage>
                            : null
                    }
                </MainBlock>
            </ContainerStyled>
        </MainStyled>
    )
}

export default Main;