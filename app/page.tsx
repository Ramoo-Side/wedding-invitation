'use client';

import Call from '#/components/call/Call';
import Date from '#/components/date/Date';
import Greeting from '#/components/greeting/Greeting';
import MemberInfo from '#/components/memberInfo/MemberInfo';
import Title from '#/components/title/Title';
import Calendar from '#/components/calendar/Calendar';
import Gallery from '#/components/gallery/Gallery';
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
import Foot from './footer';
import { useEffect, useState } from 'react';

const defaultImgUrl = 'test/couple/couple4.png';
const default2ndImgUrl = 'test/couple/couple7.png';

export default function Page() {
  const [title, setTitle] = useState({
    groom: '',
    bride: '',
  });

  useEffect(() => {
    async function fetchData() {
      const data = await (await fetch(`http://localhost:3000/api/title`)).json();
      // console.log('data: ', data);
      setTitle(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <StyleContentWrapper>
        <Title names={{ groom: '서현우', bride: '고아람' }} />
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
        <Foot />
      </StyleContentWrapper>
    </>
  );
}
