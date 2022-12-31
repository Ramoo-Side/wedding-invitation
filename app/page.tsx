'use client';

import Call from '#/components/call/Call';
import Date from '#/components/date/Date';
import Greeting from '#/components/greeting/Greeting';
import MemberInfo from '#/components/memberInfo/MemberInfo';
import Title from '#/components/title/Title';
import Calendar from '#/components/calendar/Calendar';
import Gallery from '#/components/gallery/Gallery';
import useZoomHooks from '#/hooks/useZoomHooks';
import KakaoMap from '#/components/maps/kakaoMap/KakaoMap';
import {
  StyleContentWrapper,
  StylePhoto2nd,
  StylePhoto2ndWrapper,
  StylePhoto,
} from './page.styled';
import Notice from '#/components/notice/Notice';
import Account from '#/components/account/Account';
import ShareOnKakao from '#/components/shareOnKakao/ShareOnKakao';

export default function Page() {
  const defaultImgUrl = 'test/couple/couple4.png';
  const default2ndImgUrl = 'test/couple/couple7.png';

  useZoomHooks();

  return (
    <>
      <StyleContentWrapper>
        <Title names={['김철수', '김영희']} />
        <StylePhoto url={defaultImgUrl} />
        <Date />
        <Greeting />
        <StylePhoto2ndWrapper>
          <StylePhoto2nd src={default2ndImgUrl} alt="2nd img" />
        </StylePhoto2ndWrapper>
        <MemberInfo />
        <Call />
        <Calendar />
        <Gallery />
        <KakaoMap />
        <Notice />
        <Account />
        <ShareOnKakao />
      </StyleContentWrapper>
    </>
  );
}

//? 주말엔 배포까지
