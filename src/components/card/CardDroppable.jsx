import {CardsCardDroppable, CardsDroppableItem} from "./CardDroppable.styled.js";
import {useDroppable} from "@dnd-kit/react";

const CardDroppable = ({title}) => {
    const {ref} = useDroppable({
        id: title,
    });

    return (
        <CardsDroppableItem ref={ref}>
            <CardsCardDroppable>
            </CardsCardDroppable>
        </CardsDroppableItem>
    );
};

export default CardDroppable;