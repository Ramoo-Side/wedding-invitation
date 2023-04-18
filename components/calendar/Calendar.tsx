'use client';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import 'react-calendar/dist/Calendar.css';
import {
  StyleCalendar,
  StyleCalendarWrapper,
  StyleDate,
  StyleRemainDate,
  StyleRemainText,
  StyleRemainWrapper,
  StyleTime,
} from './Calendar.styled';

export interface IProps {
  calenderInfo: {
    year: number;
    month: number;
    day: number;
    time: number;
  };
}

const Calendar = ({ calenderInfo }: IProps) => {
  const resultDate = dayjs(
    new Date(calenderInfo.year, calenderInfo.month - 1, calenderInfo.day, calenderInfo.time)
  );
  const 시작날짜 = resultDate.format('MM 월 DD 일');
  const 남은날짜 = Math.floor(resultDate.diff(dayjs(), 'day', true));
  const 시작요일 = resultDate.locale('ko').format('dddd');
  const 시작시간 = resultDate.locale('ko').format('A h시');

  return (
    <>
      <StyleCalendarWrapper>
        <StyleDate>{시작날짜}</StyleDate>
        <StyleTime>{`${시작요일} ${시작시간}`}</StyleTime>
        <StyleCalendar
          calendarType="US"
          locale="en-us"
          showNavigation={false}
          showNeighboringMonth={false}
          value={new Date(calenderInfo.year, calenderInfo.month - 1, calenderInfo.day)}
          formatDay={(locale, date) => dayjs(date).format('D')}
          tileClassName={({ date, view }) => (date.getDay() === 6 ? 'saturday' : null)}
        />
        <StyleRemainWrapper>
          <StyleRemainText>결혼식이</StyleRemainText>
          <StyleRemainDate>{Math.abs(남은날짜)}일</StyleRemainDate>
          <StyleRemainText>{남은날짜 > 0 ? `남았습니다.` : `지났습니다.`}</StyleRemainText>
        </StyleRemainWrapper>
      </StyleCalendarWrapper>
    </>
  );
};

export default Calendar;
