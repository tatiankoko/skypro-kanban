import styled, {css} from "styled-components";
import {colors} from "../../colors.js";

export const CalendarStyled = styled.div`
    width: 182px;
    margin-bottom: 20px;

    @media screen and (max-width: 660px) {
        max-width: 340px;
        width: 100%;
    }
`

export const CalendarTtl = styled.p`
    margin-bottom: 14px;
    padding: 0 7px;
    color: ${ colors.title };
    font-size: 14px;
    font-weight: 600;
    line-height: 1;

    @media screen and (max-width: 660px) {
        padding: 0;
    }
`

export const CalendarBlock = styled.div`
    display: block;
`

export const CalendarNav = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 14px;
    padding: 0 7px;

    @media screen and (max-width: 660px) {
        padding: 0;
    }
`
export const CalendarMonth = styled.div`
    color: ${ colors.gray };
    font-size: 14px;
    line-height: 25px;
    font-weight: 600;
`

export const NavActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const NavAction = styled.div`
    width: 18px;
    height: 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        fill: ${ colors.gray };
    }
`

export const CalendarContent = styled.div`
    margin-bottom: 12px;
`

export const CalendarDaysNames = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    margin: 7px 0;
    padding: 0 7px;
`

export const CalendarDayName = styled.div`
    color: ${ colors.gray };
    font-size: 10px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.2px;

    @media screen and (max-width: 660px) {
        font-size: 14px;
    }
`

export const CalendarCells = styled.div`
    width: 182px;
    height: 126px;
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 660px) {
        width: 344px;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
`

export const CalendarCell = styled.div`
    width: 22px;
    height: 22px;
    margin: 2px;
    border-radius: 50%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    color: ${ colors.gray };
    font-size: 10px;
    line-height: 1;
    letter-spacing: -0.2px;
    cursor: pointer;

    @media screen and (max-width: 660px) {
        width: 42px;
        height: 42px;
        font-size: 14px;
    }

    ${(props) =>
            props.$isOtherMonth &&
            css`opacity: 0;`}

    ${(props) =>
            props.$isCellDay &&
            css`
                &:hover {
                    color: ${ colors.gray };
                    background-color: ${ colors.mainBg };
                }
            `} 
    
    ${(props) =>
            props.$isActiveDay &&
            css`
                background-color: ${ colors.gray };
                color: ${ colors.background };
            `} 
    
    ${(props) =>
            props.$isCurrent &&
            css`
                font-weight: 700;
            `}
`

export const CalendarPeriod = styled.div`
    padding: 0 7px;

    @media screen and (max-width: 660px) {
        padding: 0;
    }
`

export const CalendarP = styled.p`
    color: ${ colors.gray };
    font-size: 10px;
    line-height: 1;

    span {
        color: ${ colors.title };
    }

    @media screen and (max-width: 660px) {
        font-size: 14px;
    }
`