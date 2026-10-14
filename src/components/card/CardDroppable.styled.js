import styled from "styled-components";

export const CardsDroppableItem = styled.div`
    padding: 5px;
    animation-duration: 500ms;
    animation-timing-function: linear;
    cursor: grab;
`

export const CardsCardDroppable = styled.div`
    width: 220px;
    height: 130px;
    background-color: transparent;
    border-radius: 10px;
    border: 1px dashed ${ ({ theme }) => theme.gray };

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;

    @media screen and (max-width: 1200px) {
        width: 220px;
        height: 130px;
    }
`