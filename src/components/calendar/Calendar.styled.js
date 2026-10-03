import styled from "styled-components";

export const CalendarContainer = styled.div`
    .react-calendar {
        width: 172px;
        max-width: 100%;
        padding: 0;
        background: transparent;
        border: none;
        font-family: "Roboto", Arial, Helvetica, sans-serif;
        /*line-height: 1.125em;*/
        margin-bottom: 14px;
        margin-top: 7px;

        *,
        *:before,
        *:after {
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
        }

        button {
            margin: 0;
            border: 0;
            outline: none;
            width: 22px !important;
            height: 22px !important;
            
            &:enabled:hover {
                cursor: pointer;
            }
        }

        @media screen and (max-width: 660px) {
            max-width: 340px;
            width: 100%;
        }
    }

    .react-calendar__month-view__day__day {
        width: 22px;
        height: 22px;
    }

    .react-calendar__month-view__days {
        row-gap: 3px;
        column-gap: 3px;
    }

    .react-calendar__month-view__weekdays {
        text-align: center;
        /*text-transform: uppercase;*/
        font: inherit;
        font-size: 10px;
        line-height: 12px;
        font-weight: 500;
        color: ${ props => props.theme.gray };
    }

    .react-calendar__month-view__weekdays__weekday {
        padding: 0.5em;

        & abbr {
            text-decoration: none !important;
        }
    }

    .react-calendar__month-view__weekNumbers .react-calendar__tile {
        display: flex;
        align-items: center;
        justify-content: center;
        font: inherit;
        font-size: 0.75em;
        font-weight: bold;
    }

    .react-calendar__month-view__days__day--weekend {
        color: ${ props => props.theme.gray };
    }

    .react-calendar__year-view .react-calendar__tile,
    .react-calendar__decade-view .react-calendar__tile,
    .react-calendar__century-view .react-calendar__tile {
        padding: 2em 0.5em;
    }

    .react-calendar__tile {
        width: 22px !important;
        height: 22px;
        /*margin: 2px;*/
        /*max-width: 100%;*/
        /*padding: 2px;*/
        background: none;
        text-align: center;
        font: inherit;
        font-size: 10px;
        line-height: 12px;
        font-weight: 400;
        color: ${ props => props.theme.gray };

        &:hover,
        &:focus {
            border-radius: 50%;
        }

        &:focus {
            background-color: transparent;
        }

        &:disabled {
            background-color: transparent;
            color: #ababab;
        }

        &:enabled:hover,
        &:enabled:focus {
            background-color: ${ props => props.theme.mainBg };
        }
    }    

    .react-calendar__tile--now {
        /*background: #EAEEF6;*/
        font-weight: 700;

        &:enabled:hover,
        &:enabled:focus {
            background-color: #e6e6e6;
            border-radius: 16px;
        }
    }    

    .react-calendar__tile--hasActive {
        background: ${ props => props.theme.gray };

        &:enabled:hover,
        &:enabled:focus {
            background: ${ props => props.theme.gray };
        }
    }

    .react-calendar__tile--active {
        background: ${ props => props.theme.gray } !important;
        border-radius: 50%;
        color: ${ props => props.theme.background };

        &:enabled:hover,
        &:enabled:focus {
            background: ${ props => props.theme.mainBg };
        }
    }

    /* Делаем каждую плитку дня строго квадратной */
    .react-calendar__month-view__days .react-calendar__tile {
        aspect-ratio: 1 / 1;
        flex-basis: 22px !important;
    }

    .react-calendar--selectRange .react-calendar__tile--hover {
        background-color: transparent;
    }
`

export const CalendarStyled = styled.div`    
    /*
    width: 100%;
     */
    /*width: 182px;
    margin-bottom: 20px;

    @media screen and (max-width: 660px) {
        max-width: 340px;
        width: 100%;
    }*/
`

export const CalendarTtl = styled.p`
    margin-bottom: 14px;
    padding: 0 7px;
    color: ${ ({ theme }) => theme.title };
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
    padding: 0 0 0 7px;

    @media screen and (max-width: 660px) {
        padding: 0;
    }
`
export const CalendarMonth = styled.div`
    color: ${ ({ theme }) => theme.gray };
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
        fill: ${ ({ theme }) => theme.gray };
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
    color: ${ ({ theme }) => theme.gray };
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
export const CalendarPeriod = styled.div`
    padding: 0 7px;

    @media screen and (max-width: 660px) {
        padding: 0;
    }
`

export const CalendarP = styled.p`
    color: ${ ({ theme }) => theme.gray };
    font-size: 10px;
    line-height: 1;

    span {
        color: ${ ({ theme }) => theme.title };
    }

    @media screen and (max-width: 660px) {
        font-size: 14px;
    }
`