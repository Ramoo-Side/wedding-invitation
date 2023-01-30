import styled from 'styled-components';

export const StyleCallButtonWrapper = styled.div(() => ({
  padding: '2.5rem 0',
  marginTop: '1.25rem',
  justifyContent: 'center',
  display: 'flex',
}));

export const StyleCallButton = styled.span`
  & {
    position: relative;
    background-color: white;
    border: 1px solid #f1965f;
    border-radius: 0.625rem;
    font-size: 1.125rem;
    font-weight: bold;
    color: #f1965f;
    padding: 1.25rem 7.8125rem;
    cursor: pointer;
    user-select: none;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    transition-duration: 0.4s;
  }

  &:hover {
    transition-duration: 0.1s;
    background-color: #f1965f;
    color: #fff;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    border-radius: 0.625rem;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.7s;
    box-shadow: 0 0 0.625rem 1.25rem #f1965f;
  }

  &:active:after {
    box-shadow: 0 0 0 0 #f1965f;
    position: absolute;
    border-radius: 0.625rem;
    left: 0;
    top: 0;
    opacity: 1;
    transition: 0s;
  }

  &:active {
    top: 0.0625rem;
  }
`;
