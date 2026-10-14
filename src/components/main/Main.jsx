import Column from "../column/Column.jsx";
import {MainBlock, MainContent, MainPlaceholder, MainStyled} from "./Main.styled.js";
import {ContainerStyled} from "../Container.styled.js";
import {ErrorMessage} from "../Notification.styled.js";
import {status} from "../../status.js";
import {useCallback, useEffect, useState} from "react";
import {useTasks} from "../../context/TaskContext.jsx";
import {fetchTasks} from "../../services/api.js";
import {useAuth} from "../../context/AuthContext.jsx";
import {DragDropProvider} from "@dnd-kit/react";

const Main = () => {
    const [loading, setLoading] = useState(true)
    const {tasks, setTasks, updateTask} = useTasks();
    const {user} = useAuth();
    const [error, setError] = useState('');
    const [dragActive, setDragActive] = useState(false);

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


    const handleDragStart = async (event) => {
        if (event.canceled) return;

        setDragActive(true);
    };

    const handleDragEnd = async (event) => {
        setDragActive(false);

        if (event.canceled) return;

        const {source, target} = event.operation;
        if (!source || !target) return;

        const task = tasks?.find((task) => task._id === source.id);
        if (!task || task.status === target.id) return;

        await updateTask({...task, status: target.id});
    };

    return (
        <MainStyled>
            <ContainerStyled>
                <MainBlock>
                    <MainContent>
                        <DragDropProvider onDragStart={handleDragStart}
                                          onDragEnd={handleDragEnd}>
                            <Column title={status.none} loading={loading} dragActive={dragActive}/>
                            <Column title={status.todo} loading={loading} dragActive={dragActive}/>
                            <Column title={status.process} loading={loading} dragActive={dragActive}/>
                            <Column title={status.testing} loading={loading} dragActive={dragActive}/>
                            <Column title={status.done} loading={loading} dragActive={dragActive}/>
                        </DragDropProvider>
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