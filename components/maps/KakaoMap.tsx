'use client';

import React, { useRef } from 'react';
import KaKaoScripts from '../scripts/KaKaoScripts';
import {
  StyleLocation,
  StyleLocationTitle,
  StyleMap,
  StyleNaviLogo,
  StyleNaviWrapper,
  StyleTitle,
  StyleTitleWrapper,
} from './KakaoMap.styled';
const KAKAO_LOGO = '/kakaonavi-icon.png';
const NAVER_LOGO = '/navermap-icon.png';
const TMAP_LOGO = '/tmap-icon.png';

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
      <StyleNaviWrapper>
        <div>
          <StyleNaviLogo src={NAVER_LOGO} />
          <span>네이버 지도</span>
        </div>
        <div>
          <StyleNaviLogo src={KAKAO_LOGO} />
          <span>카카오 네비</span>
        </div>
        <div>
          <StyleNaviLogo src={TMAP_LOGO} />
          <span>티맵</span>
        </div>
      </StyleNaviWrapper>
    </>
  );
};

export default KakaoMap;
