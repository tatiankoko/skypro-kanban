import Column from "../column/Column.jsx";
import {MainBlock, MainContent, MainPlaceholder, MainStyled} from "./Main.styled.js";
import {ContainerStyled} from "../Container.styled.js";
import {ErrorMessage} from "../Notification.styled.js";
import {status} from "../../status.js";

const Main = ({error, tasks, loading}) => {
    return (
        <MainStyled>
            <ContainerStyled>
                <MainBlock>
                    <MainContent>
                        <Column title={status.none} tasks={tasks} loading={loading}/>
                        <Column title={status.todo} tasks={tasks} loading={loading}/>
                        <Column title={status.process} tasks={tasks} loading={loading}/>
                        <Column title={status.testing} tasks={tasks} loading={loading}/>
                        <Column title={status.done} tasks={tasks} loading={loading}/>
                    </MainContent>
                    {
                        loading
                            ? <MainPlaceholder>Идет загрузка задач...</MainPlaceholder>
                            : tasks.tasks.length === 0
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