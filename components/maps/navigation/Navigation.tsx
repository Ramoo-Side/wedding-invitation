import React from 'react';
import {
  StyleKakaoWrapper,
  StyleNaverWrapper,
  StyleNaviLogo,
  StyleNaviWrapper,
  StyleTmapWrapper,
} from './Navigation.styled';
const KAKAO_LOGO = '/kakaonavi-icon.png';
const NAVER_LOGO = '/navermap-icon.png';
const TMAP_LOGO = '/tmap-icon.png';

const Navigation = () => {
  const kakaoNavigation = () => {
    window.Kakao.Navi.start({
      name: '팜파스13',
      x: 129.35525736980682,
      y: 35.557144505209039,
      coordType: 'wgs84',
    });
  };

  return (
    <>
      <StyleNaviWrapper>
        <StyleNaverWrapper>
          <a
            href={`nmap://search?query=${encodeURIComponent('팜파스13')}&amp;appname=${'url 위치'}`}
            // href={`https://map.naver.com/v5/search/%ED%8C%9C%ED%8C%8C%EC%8A%A413/place/1494596721?c=14399727.0172462,4239848.5746307,19.39,0,0,0,dh&isCorrectAnswer=true`}
          >
            <StyleNaviLogo src={NAVER_LOGO} />
            <span>네이버 지도</span>
          </a>
        </StyleNaverWrapper>
        <StyleKakaoWrapper>
          <a href="#" onClick={kakaoNavigation}>
            <StyleNaviLogo src={KAKAO_LOGO} />
            <span>카카오 네비</span>
          </a>
        </StyleKakaoWrapper>
        <StyleTmapWrapper>
          <a href="tmap://search?name=팜파스13">
            <StyleNaviLogo src={TMAP_LOGO} />
            <span>티맵</span>
          </a>
        </StyleTmapWrapper>
      </StyleNaviWrapper>
    </>
  );
};

export default Navigation;
