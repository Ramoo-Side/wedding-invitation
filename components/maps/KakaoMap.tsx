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

  const kakaoNavigation = () => {
    window.kakao.Navi.start({
      name: '현대백화점 판교점',
      x: 127.11205203011632,
      y: 37.39279717586919,
      coordType: 'wgs84',
    });
  };

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
          <a
            href={`nmap://search?query=${encodeURIComponent('팜파스13')}&amp;appname=${'url 위치'}`}
            // href={`https://map.naver.com/v5/search/%ED%8C%9C%ED%8C%8C%EC%8A%A413/place/1494596721?c=14399727.0172462,4239848.5746307,19.39,0,0,0,dh&isCorrectAnswer=true`}
          >
            <StyleNaviLogo src={NAVER_LOGO} />
            <span>네이버 지도</span>
          </a>
        </div>
        <div>
          <StyleNaviLogo src={KAKAO_LOGO} />
          <span>카카오 네비</span>
        </div>
        <div>
          <a href="tmap://search?name=팜파스13">
            <StyleNaviLogo src={TMAP_LOGO} />
            <span>티맵</span>
          </a>
        </div>
      </StyleNaviWrapper>
    </>
  );
};

export default KakaoMap;
