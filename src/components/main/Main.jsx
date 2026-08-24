import Column from "../column/Column.jsx";
import {MainBlock, MainContent, MainStyled} from "./Main.styled.js";
import {ContainerStyled} from "../Container.styled.js";

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
                            ? <p>LOADING...</p>
                            : tasks.tasks.length === 0
                                ? <p>Пока нет задач Выберите пустую форму или другой шаблон выше, чтобы начать.</p>
                                : null
                    }
                </MainBlock>
                {
                    loading
                        ? <p>SOMETHING...</p>
                        : tasks.tasks.length === 0
                            ? <p>Пока нет задач Выберите пустую форму или другой шаблон выше, чтобы начать.</p>
                            : null
                }
            </ContainerStyled>
        </MainStyled>
    )
}

export default Main;