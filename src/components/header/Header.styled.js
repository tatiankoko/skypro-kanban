import styled from "styled-components";

export const HeaderStyled = styled.header`
    width: 100%;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.background};
`

export const HeaderBlock = styled.div`
    height: 70px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: 0;
    padding: 0 10px;
`

export const HeaderNav = styled.nav`
    max-width: 290px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeaderLogo = styled.div`
    display: block;
    
    img {
        width: 85px;
    }
`

export const HeaderButtonMainNew = styled.button`
    width: 178px;
    height: 30px;
    border-radius: 4px;
    background-color: ${ ({ theme }) => theme.btnBg };
    color: ${ ({ theme }) => theme.btnText };
    border: none;
    font-size: 14px;
    line-height: 1;
    font-weight: 500;
    margin-right: 20px;

    &:hover {
        background-color: ${ ({ theme }) => theme.btnHover };
    }

    @media screen and (max-width: 495px) {
        z-index: 3;
        position: fixed;
        left: 16px;
        bottom: 30px;
        top: auto;
        width: calc(100vw - 32px);
        height: 40px;
        border-radius: 4px;
        margin-right: 0;
    }
`

export const HeaderUser = styled.a`
    height: 20px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 20px;
    color: ${ props => props.theme.btnBorder };
    
    ${ (props) => props.theme.mode === 'dark' 
            ? props.theme.btnText
            : props.theme.btnBg };
    
    &::after {
        content: "";
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 1px;
        border-left: 2px solid ${ props => props.theme.btnBorder };
        border-bottom: 2px solid ${ props => props.theme.btnBorder };
        transform: rotate(-45deg);
        margin: -6px 0 0 5px;
        padding: 0;
    } 

    &:hover {
        color: ${ (props) =>
                props.theme.mode === 'light' ? props.theme.btnHover : props.theme.btnBg };

        &::after {
            border-left-color: ${ (props) =>
                    props.theme.mode === 'light' ? props.theme.btnHover : props.theme.btnBg };
            border-bottom-color: ${ (props) =>
                    props.theme.mode === 'light' ? props.theme.btnHover : props.theme.btnBg };
        }
    }
`

