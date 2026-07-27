import Column from "../column/Column.jsx";
import {cardList} from "../../data.js";
import {useEffect, useState} from "react";

const Main = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <main className="main">
            <div className="container">

                <div className="main__block">
                    <div className="main__content">
                        <Column title="Без статуса" cards={cardList} loading={loading} />
                        <Column title="Нужно сделать" cards={cardList} loading={loading} />
                        <Column title="В работе" cards={cardList} loading={loading} />
                        <Column title="Тестирование" cards={cardList} loading={loading} />
                        <Column title="Готово" cards={cardList} loading={loading} />
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Main;