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
    /*height: 100vh;*/
    display: block;
    position: relative;
    overflow-y: auto;
    /*overflow-x: auto;*/
    
    @media screen and (max-width: 1200px) {
        width: 100%;
        display: flex;
        overflow-y: auto;
    }
`