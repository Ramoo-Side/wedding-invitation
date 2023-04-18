import React from 'react';
import { IProps } from '../kakaoMap/KakaoMap';
import {
  StyleLocation,
  StyleLocationTitle,
  StyleTitle,
  StyleLocationWrapper,
} from './Location.styled';

const Location = ({ locationInfo }: IProps) => {
  return (
    <>
      <StyleLocationWrapper>
        <StyleTitle>오시는길</StyleTitle>
        <StyleLocationTitle>{locationInfo.title}</StyleLocationTitle>
        <StyleLocation>{locationInfo.detail}</StyleLocation>
      </StyleLocationWrapper>
    </>
  );
};

export default Location;
