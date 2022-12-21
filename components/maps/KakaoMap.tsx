'use client';

import React, { useRef } from 'react';
import KaKaoScripts from '../scripts/KaKaoScripts';
import {
  StyleLocation,
  StyleLocationTitle,
  StyleMap,
  StyleTitle,
  StyleTitleWrapper,
} from './KakaoMap.styled';

const KakaoMap = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <StyleTitleWrapper>
        <StyleTitle>오시는길</StyleTitle>
        <StyleLocationTitle>팜파스 13</StyleLocationTitle>
        <StyleLocation>울산광역시 북구 명촌23길 44 1~4층</StyleLocation>
      </StyleTitleWrapper>
      <KaKaoScripts containerRef={containerRef} />
      <StyleMap id="map" ref={containerRef} />
    </>
  );
};

export default KakaoMap;
