import React from 'react';
import {
  StyleLocation,
  StyleLocationTitle,
  StyleTitle,
  StyleLocationWrapper,
} from './Location.styled';

const Location = () => {
  return (
    <>
      <StyleLocationWrapper>
        <StyleTitle>오시는길</StyleTitle>
        <StyleLocationTitle>팜파스 13</StyleLocationTitle>
        <StyleLocation>울산광역시 북구 명촌23길 44 1~4층</StyleLocation>
      </StyleLocationWrapper>
    </>
  );
};

export default Location;
