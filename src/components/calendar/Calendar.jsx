import {
    CalendarBlock, CalendarCell, CalendarCells,
    CalendarContent, CalendarDayName, CalendarDaysNames,
    CalendarMonth,
    CalendarNav, CalendarP, CalendarPeriod,
    CalendarTtl,
    NavAction,
    NavActions
} from "./Calendar.styled.js";

const Calendar = () => {
    return (
        <div className="pop-new-card__calendar calendar">
            <CalendarTtl>Даты</CalendarTtl>
            <CalendarBlock>
                <CalendarNav>
                    <CalendarMonth>Сентябрь 2023</CalendarMonth>
                    <NavActions>
                        <NavAction data-action="prev">
                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
                            </svg>
                        </NavAction>
                        <NavAction data-action="next">
                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
                            </svg>
                        </NavAction>
                    </NavActions>
                </CalendarNav>
                <CalendarContent>
                    <CalendarDaysNames>
                        <CalendarDayName>пн</CalendarDayName>
                        <CalendarDayName>вт</CalendarDayName>
                        <CalendarDayName>ср</CalendarDayName>
                        <CalendarDayName>чт</CalendarDayName>
                        <CalendarDayName>пт</CalendarDayName>
                        <CalendarDayName className="-weekend-">сб</CalendarDayName>
                        <CalendarDayName className="-weekend-">вс</CalendarDayName>
                    </CalendarDaysNames>
                    <CalendarCells>
                        <CalendarCell $isOtherMonth={true} $isCellDay={false} $isActiveDay={false} $isCurrent={false}>28</CalendarCell>
                        <CalendarCell $isOtherMonth={true} $isCellDay={false} $isActiveDay={false} $isCurrent={false}>29</CalendarCell>
                        <CalendarCell $isOtherMonth={true} $isCellDay={false} $isActiveDay={false} $isCurrent={false}>30</CalendarCell>
                        <CalendarCell $isOtherMonth={false} $isCellDay={true} $isActiveDay={false} $isCurrent={false}>31</CalendarCell>
                        <CalendarCell $isOtherMonth={false} $isCellDay={true} $isActiveDay={false} $isCurrent={false}>1</CalendarCell>
                        <CalendarCell $isOtherMonth={false} $isCellDay={true} $isActiveDay={false} $isCurrent={false}>2</CalendarCell>
                        <CalendarCell $isOtherMonth={false} $isCellDay={true} $isActiveDay={false} $isCurrent={false}>3</CalendarCell>
                        <CalendarCell $isOtherMonth={false} $isCellDay={true} $isActiveDay={false} $isCurrent={false}>4</CalendarCell>
                        <CalendarCell $isOtherMonth={false} $isCellDay={true} $isActiveDay={false} $isCurrent={false}>5</CalendarCell>
                        <CalendarCell $isOtherMonth={false} $isCellDay={true} $isActiveDay={false} $isCurrent={false}>6</CalendarCell>
                        <CalendarCell $isOtherMonth={false} $isCellDay={true} $isActiveDay={false} $isCurrent={false}>7</CalendarCell>
                        <CalendarCell $isOtherMonth={false} $isCellDay={true} $isActiveDay={false} $isCurrent={true}>8</CalendarCell>
                        <CalendarCell $isOtherMonth={false} $isCellDay={true} $isActiveDay={true} $isCurrent={false}>9</CalendarCell>
                        <CalendarCell $isOtherMonth={false} $isCellDay={true} $isActiveDay={false} $isCurrent={false}>10</CalendarCell>
                        <CalendarCell $isOtherMonth={false} $isCellDay={true} $isActiveDay={false} $isCurrent={false}>11</CalendarCell>
                        <CalendarCell $isOtherMonth={false} $isCellDay={true} $isActiveDay={false} $isCurrent={false}>12</CalendarCell>
                        <CalendarCell $isOtherMonth={false} $isCellDay={true} $isActiveDay={false} $isCurrent={false}>13</CalendarCell>
                        <CalendarCell $isOtherMonth={false} $isCellDay={true} $isActiveDay={false} $isCurrent={false}>14</CalendarCell>
                        <CalendarCell $isOtherMonth={false} $isCellDay={true} $isActiveDay={false} $isCurrent={false}>15</CalendarCell>
                        <CalendarCell $isOtherMonth={false} $isCellDay={true} $isActiveDay={false} $isCurrent={false}>16</CalendarCell>
                        <CalendarCell $isOtherMonth={false} $isCellDay={true} $isActiveDay={false} $isCurrent={false}>17</CalendarCell>
                        <CalendarCell $isOtherMonth={false} $isCellDay={true} $isActiveDay={false} $isCurrent={false}>18</CalendarCell>
                        <CalendarCell $isOtherMonth={false} $isCellDay={true} $isActiveDay={false} $isCurrent={false}>19</CalendarCell>
                        <CalendarCell $isOtherMonth={false} $isCellDay={true} $isActiveDay={false} $isCurrent={false}>20</CalendarCell>
                        <CalendarCell $isOtherMonth={false} $isCellDay={true} $isActiveDay={false} $isCurrent={false}>21</CalendarCell>
                        <CalendarCell $isOtherMonth={false} $isCellDay={true} $isActiveDay={false} $isCurrent={false}>22</CalendarCell>
                        <CalendarCell $isOtherMonth={false} $isCellDay={true} $isActiveDay={false} $isCurrent={false}>23</CalendarCell>
                        <CalendarCell $isOtherMonth={false} $isCellDay={true} $isActiveDay={false} $isCurrent={false}>24</CalendarCell>
                        <CalendarCell $isOtherMonth={false} $isCellDay={true} $isActiveDay={false} $isCurrent={false}>25</CalendarCell>
                        <CalendarCell $isOtherMonth={false} $isCellDay={true} $isActiveDay={false} $isCurrent={false}>26</CalendarCell>
                        <CalendarCell $isOtherMonth={false} $isCellDay={true} $isActiveDay={false} $isCurrent={false}>27</CalendarCell>
                        <CalendarCell $isOtherMonth={false} $isCellDay={true} $isActiveDay={false} $isCurrent={false}>28</CalendarCell>
                        <CalendarCell $isOtherMonth={false} $isCellDay={true} $isActiveDay={false} $isCurrent={false}>29</CalendarCell>
                        <CalendarCell $isOtherMonth={false} $isCellDay={true} $isActiveDay={false} $isCurrent={false}>30</CalendarCell>
                        <CalendarCell $isOtherMonth={true} $isCellDay={false} $isActiveDay={false} $isCurrent={false}>1</CalendarCell>
                    </CalendarCells>
                </CalendarContent>

                <CalendarPeriod>
                    <CalendarP className="date-end">Срок исполнения: <span
                        className="date-control">09.09.23</span></CalendarP>
                    <input type="hidden" id="datepick_value" value="08.09.2023"/>
                </CalendarPeriod>
            </CalendarBlock>
        </div>
    );
}

export default Calendar;
