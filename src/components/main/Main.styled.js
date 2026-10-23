import styled from "styled-components";

export const MainStyled = styled.main`
    width: 100%;
    background-color: ${ (theme) => theme.mainBg };
`

export const MainContainerStyled = styled.div`
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;

    @media screen and (max-width: 495px) {
        width: 100%;
        padding: 0 0 0 16px;
    }
`

export const MainBlock = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    margin: 0 auto;
    padding: 25px 0 49px;

    @media screen and (max-width: 1200px) {
        width: 100%;
        margin: 0 auto;
        padding: 30px 0 69px;

        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        -ms-overflow-style: none;
        touch-action: pan-y;
    }
`

export const MainContent = styled.div`
    width: 100%;
    display: flex;

    &::-webkit-scrollbar {
        width: 0;
        height: 0;
        display: none;
    }
    
    @media screen and (max-width: 1200px) {
        display: block;
    }
`

export const MainPlaceholder = styled.div`
    justify-self: center;
    align-content: center;
    height: 100%;

    color: ${ ({ theme }) => theme.gray };
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 20px;

    @media screen and (max-width: 1200px) {
        align-content: flex-start;
        margin-top: 20px;
    }
`

