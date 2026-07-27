import Card from "../card/Card.jsx";
import CardLoader from "../card/CardLoader.jsx";

const Column = ({title, cards, loading}) => {
    return (
        <div className="main__column">
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
                                : <Card key={card.id} card={card} />
                        )
                }
            </div>
        </div>
    );
}

export default Column;