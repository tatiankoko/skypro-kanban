import styled from "styled-components";

export const ColumnStyled = styled.div`
    width: 20%;
    margin: 0 auto;
    display: block;

    @media screen and (max-width: 1200px) {
        width: 100%;
        margin: 0 auto;
        display: block;
    }
`

export const ColumnTitle = styled.div`
    padding: 0 10px;
    margin: 15px 0;

    p {
        color: ${ ({ theme }) => theme.gray };
        font-size: 14px;
        font-weight: 600;
        line-height: 1;
        text-transform: uppercase;
    }
`

export const ColumnCards = styled.div`
    width: 100%;
    max-height: calc(100vh - 188px);
    display: block;
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
    touch-action: pan-y;

    &::-webkit-scrollbar {
        width: 0;
        height: 0;
        display: none;
    }

    @media screen and (max-width: 1200px) {
        width: 100%;
        max-height: none;
        display: flex;
        overflow-x: auto;
        overflow-y: hidden;
        touch-action: pan-x;
    }
`