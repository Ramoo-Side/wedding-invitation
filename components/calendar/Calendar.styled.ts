import styled from 'styled-components';
import ReactCalendar from 'react-calendar';

export const StyleDate = styled.div(() => ({
  fontSize: 24,
  fontWeight: 'bold',
  color: '#f1965f',
  marginBottom: 15,
}));

export const StyleTime = styled.div(() => ({
  fontSize: 20,
  marginBottom: 20,
  letterSpacing: 2,
}));

export const StyleCalendar = styled(ReactCalendar)`
  &.react-calendar {
    width: 100%;
    border: none;
    padding: 1.25rem 6.25rem;
    font-size: 1.5rem;
    pointer-events: none;
    margin-bottom: 20px;

    .react-calendar__viewContainer {
      border-top: 1px solid #f1965f;
      border-bottom: 1px solid #f1965f;
      padding: 3.125rem 0;
    }

    .react-calendar__month-view__weekdays {
      display: none !important;
    }

    .react-calendar__month-view__days {
      button {
        font-size: 1.25rem;
      }
    }

    .react-calendar__tile--active {
      background-color: transparent;
      abbr {
        color: #fff;
        background-color: #f1965f;
        padding: 0.4375rem 0.8125rem;
        border-radius: 50%;
      }
    }

    .react-calendar__tile {
      height: 3.875rem;
    }

    .saturday {
      color: #000;
    }
  }
`;

export const StyleRemainWrapper = styled.div(() => ({
  letterSpacing: 2,
  marginBottom: 15,
}));

export const StyleRemainText = styled.span(() => ({
  fontSize: 18,
  marginRight: 5,
}));

export const StyleRemainDate = styled.span(() => ({
  fontSize: 18,
  color: '#f1965f',
  fontWeight: 700,
  marginRight: 5,
}));
