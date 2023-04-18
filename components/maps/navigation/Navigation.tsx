import React from 'react';
import { IProps } from '../kakaoMap/KakaoMap';
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

const Navigation = ({ locationInfo }: IProps) => {
  const kakaoNavigation = () => {
    window.Kakao.Navi.start({
      name: locationInfo.title,
      x: locationInfo.coord[0],
      y: locationInfo.coord[1],
      coordType: 'wgs84',
    });
  };

  return (
    <>
      <StyleNaviWrapper>
        <StyleNaverWrapper>
          <a
            href={`nmap://search?query=${encodeURIComponent(locationInfo.title)}&amp;appname=${
              locationInfo.appURL
            }`}
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
          <a href={`tmap://search?name=${locationInfo.title}`}>
            <StyleNaviLogo src={TMAP_LOGO} />
            <span>티맵</span>
          </a>
        </StyleTmapWrapper>
      </StyleNaviWrapper>
    </>
  );
};

export default Navigation;
