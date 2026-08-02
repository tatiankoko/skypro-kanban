import {CardContent, CardGroup, CardsCard, CardsItem} from "./Card.styled.js";
import {CardLoaderBtn, CardLoaderDate, CardLoaderTheme, CardLoaderTitle} from "./CardLoader.styled.js";

const CardLoader = () => {
    return (
        <CardsItem>
            <CardsCard>
                <CardGroup>
                    <CardLoaderTheme></CardLoaderTheme>
                    <CardLoaderBtn></CardLoaderBtn>
                </CardGroup>
                <CardContent>
                    <CardLoaderTitle></CardLoaderTitle>
                    <CardLoaderDate></CardLoaderDate>
                </CardContent>
            </CardsCard>
        </CardsItem>
    );
};

export default CardLoader;