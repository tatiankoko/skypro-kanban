import Card from "../card/Card.jsx";
import CardLoader from "../card/CardLoader.jsx";
import {MainColumn} from "../main/Main.styled.js";

const Column = ({title, cards, loading}) => {
    return (
        <MainColumn>
            <div className="column__title">
                <p>{title}</p>
            </div>
            <div className="cards">
                {
                    cards
                        .filter((card) => card.status === title)
                        .map((card) =>
                            loading
                                ? <CardLoader />
                                : <Card card={card} />
                        )
                }
            </div>
        </MainColumn>
    );
}

export default Column;