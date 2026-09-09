import Column from "../column/Column.jsx";
import {MainBlock, MainContent, MainPlaceholder, MainStyled} from "./Main.styled.js";
import {ContainerStyled} from "../Container.styled.js";
import {ErrorMessage} from "../Notification.styled.js";

const Main = ({error, tasks, loading}) => {
    return (
        <MainStyled>
            <ContainerStyled>
                <MainBlock>
                    <MainContent>
                        <Column title="Без статуса" tasks={tasks} loading={loading}/>
                        <Column title="Нужно сделать" tasks={tasks} loading={loading}/>
                        <Column title="В работе" tasks={tasks} loading={loading}/>
                        <Column title="Тестирование" tasks={tasks} loading={loading}/>
                        <Column title="Готово" tasks={tasks} loading={loading}/>
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