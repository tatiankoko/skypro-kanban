import Card from 'src/components/card/Card.jsx'

const Column = () => {
    return (
        <div className="main__column">
            <div className="column__title">
                <p>Без статуса</p>
            </div>
            <div className="cards">
                <div className="cards__item">
                    <Card />
                </div>
            </div>
        </div>
    );
}

export default Column;