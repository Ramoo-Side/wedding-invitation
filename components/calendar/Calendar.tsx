'use client';

import dayjs from 'dayjs';
import { useState } from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

const Calendar = () => {
  const selectedDate = dayjs(new Date(2022, 3, 9));
  // console.log(selectedDate.format('YYYY년 MM월 DD일'));
  return (
    <>
      <StyleCalendar
        calendarType="US"
        value={new Date(2022, 3, 9)}
        showNavigation={false}
        showNeighboringMonth={false}
        formatDay={(locale, date) => dayjs(date).format('D')}
        locale="en-us"
      />
    </>
  );
};

export default Calendar;

const StyleCalendar = styled(ReactCalendar)`
  &.react-calendar {
    width: 100%;
    border: none;
    border-top: 1px solid #f1965f;
    border-bottom: 1px solid #f1965f;
    padding: 50px 0;
    font-size: 24px;
    pointer-events: none;

    .react-calendar__month-view__weekdays {
      display: none !important;
    }
  }
`;
