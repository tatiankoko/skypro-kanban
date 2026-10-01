import Column from "../column/Column.jsx";
import {MainBlock, MainContent, MainPlaceholder, MainStyled} from "./Main.styled.js";
import {ContainerStyled} from "../Container.styled.js";
import {ErrorMessage} from "../Notification.styled.js";
import {status} from "../../status.js";
import {useContext} from "react";
import TasksContext from "../../context/TaskContext.jsx";

const Main = ({error, loading}) => {
    const {tasks} = useContext(TasksContext);

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