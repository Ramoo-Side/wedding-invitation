import React from 'react';
import Swal from 'sweetalert2';
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
  const pushAlert = () => {
    Swal.fire({
      title: `<span style='font-size: 20px'>모바일에서만 확인 가능합니다</span>`,
      showConfirmButton: false,
      width: `20rem`,
      // timer: 1000,
    });
  };

  const kakaoNavigation = (e: { preventDefault: () => void }) => {
    if (!/Mobi/i.test(window.navigator.userAgent)) {
      e.preventDefault();
      pushAlert();
    }
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
            onClick={(e) => {
              if (!/Mobi/i.test(window.navigator.userAgent)) {
                e.preventDefault();
                pushAlert();
              }
            }}
            style={{ textDecoration: 'none', color: '#333' }}
          >
            <StyleNaviLogo src={NAVER_LOGO} />
            <span>네이버 지도</span>
          </a>
        </StyleNaverWrapper>
        <StyleKakaoWrapper>
          <a href="#" onClick={kakaoNavigation} style={{ textDecoration: 'none', color: '#333' }}>
            <StyleNaviLogo src={KAKAO_LOGO} />
            <span>카카오 네비</span>
          </a>
        </StyleKakaoWrapper>
        <StyleTmapWrapper>
          <a
            href={`tmap://search?name=${locationInfo.title}`}
            onClick={(e) => {
              if (!/Mobi/i.test(window.navigator.userAgent)) {
                e.preventDefault();
                pushAlert();
              }
            }}
            style={{ textDecoration: 'none', color: '#333' }}
          >
            <StyleNaviLogo src={TMAP_LOGO} />
            <span>티맵</span>
          </a>
        </StyleTmapWrapper>
      </StyleNaviWrapper>
    </>
  );
};

export default Navigation;
