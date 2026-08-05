import Card from "../card/Card.jsx";
import CardLoader from "../card/CardLoader.jsx";
import {MainColumn} from "../main/Main.styled.js";
import {CardsStyled} from "../card/Card.styled.js";
import {ColumnTitle} from "./Column.styled.js";

const Column = ({title, cards, loading}) => {
    return (
        <MainColumn>
            <ColumnTitle>
                <p>{title}</p>
            </ColumnTitle>
            <CardsStyled>
                {
                    cards
                        .filter((card) => card.status === title)
                        .map((card) =>
                            loading
                                ? <CardLoader key={card.id} />
                                : <Card key={card.id}
                                        theme={card.theme}
                                        title={card.title}
                                        date={card.date}/>
                        )
                }
            </CardsStyled>
        </MainColumn>
    );
}

export default Column;