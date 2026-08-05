import Column from "../column/Column.jsx";
import {cardList} from "../../data.js";
import {useEffect, useState} from "react";
import {MainBlock, MainContent, MainStyled} from "./Main.styled.js";
import {ContainerStyled} from "../Container.styled.js";

const Main = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <MainStyled>
            <ContainerStyled>
                <MainBlock>
                    <MainContent>
                        <Column title="Без статуса" cards={cardList} loading={loading} />
                        <Column title="Нужно сделать" cards={cardList} loading={loading} />
                        <Column title="В работе" cards={cardList} loading={loading} />
                        <Column title="Тестирование" cards={cardList} loading={loading} />
                        <Column title="Готово" cards={cardList} loading={loading} />
                    </MainContent>
                </MainBlock>
            </ContainerStyled>
        </MainStyled>
    )
}

export default Main;