'use client';

import dayjs from 'dayjs';
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

const Calendar = () => {
  const selectedDate = dayjs(new Date(2022, 3, 9)).format('MM월 DD일');
  const 남은날짜 = Math.floor(dayjs(new Date(2022, 3, 9)).diff(dayjs(), 'day', true));
  return (
    <>
      <StyleCalendarWrapper>
        <StyleDate>{selectedDate}</StyleDate>
        <StyleTime>{'토요일 오후 6시'}</StyleTime>
        <StyleCalendar
          calendarType="US"
          locale="en-us"
          showNavigation={false}
          showNeighboringMonth={false}
          value={new Date(2022, 3, 9)}
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
