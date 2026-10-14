import Card from "../card/Card.jsx";
import CardLoader from "../card/CardLoader.jsx";
import {MainColumn} from "../main/Main.styled.js";
import {CardsStyled} from "../card/Card.styled.js";
import {ColumnTitle} from "./Column.styled.js";
import {cardList} from "../../data.js";
import {useTasks} from "../../context/TaskContext.jsx";
import CardDroppable from "../card/CardDroppable.jsx";

const Column = ({title, loading, dragActive}) => {
    const {tasks} = useTasks();

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
                                <CardLoader key={task.id} />
                            )
                        : tasks?.length === 0
                            ? <p></p>
                            : tasks
                                .filter((task) => task.status === title)
                                .map((task) =>
                                    loading
                                        ? <CardLoader key={task._id} />
                                        : <Card key={task._id}
                                                theme={task.topic}
                                                title={task.title}
                                                date={task.date}
                                                id={task._id} />
                                )
                }
                <CardDroppable dragActive={dragActive} title={title} />
            </CardsStyled>
        </MainColumn>
    );
}

export default Column;