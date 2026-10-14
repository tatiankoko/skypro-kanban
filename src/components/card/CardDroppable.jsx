import {CardsCardDroppable, CardsDroppableItem} from "./CardDroppable.styled.js";
import {useDroppable} from "@dnd-kit/react";

const CardDroppable = ({dragActive, title}) => {
    const {ref} = useDroppable({
        id: title,
    });

    return (
        <CardsDroppableItem ref={ref}>
            <CardsCardDroppable $dragActive={dragActive}>
            </CardsCardDroppable>
        </CardsDroppableItem>
    );
};

export default CardDroppable;