import Card from "../card/Card.jsx";
import CardLoader from "../card/CardLoader.jsx";
import {MainColumn} from "../main/Main.styled.js";
import {CardsStyled} from "../card/Card.styled.js";
import {ColumnTitle} from "./Column.styled.js";
import {cardList} from "../../data.js";

const Column = ({title, tasks, loading}) => {
    return (
        <MainColumn>
            <ColumnTitle>
                <p>{title}</p>
            </ColumnTitle>
            <CardsStyled>
                {
                    loading
                        ? cardList
                            .filter((task) => task.status === title)
                            .map((task) =>
                                <CardLoader key={task._id} />
                            )
                        : tasks.tasks.length === 0
                            ? <p></p>
                            : tasks.tasks
                                .filter((task) => task.status === title)
                                .map((task) =>
                                    loading
                                        ? <CardLoader key={task._id} />
                                        : <Card key={task._id}
                                                theme={task.topic}
                                                title={task.title}
                                                date={task.date}
                                                id={task._id}/>
                                )
                }
            </CardsStyled>
        </MainColumn>
    );
}

export default Column;