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
const default2ndImgUrl = '/test/test-picture.jpg';
// const default2ndImgUrl = 'test/couple/couple7.png';

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
        <Title names={dataObj.titleName} />
        <StylePhoto url={defaultImgUrl} />
        <Date />
        <Greeting />
        <StylePhoto2ndWrapper>
          <StylePhoto2nd src={default2ndImgUrl} alt="2nd img" width={350} height={216} />
        </StylePhoto2ndWrapper>
        <MemberInfo memberInfo={dataObj.memberInfo} />
        <Call />
        <Calendar calenderInfo={dataObj.calenderInfo} />
        <Gallery />
        <KakaoMap locationInfo={dataObj.locationInfo} />
        <Notice />
        <Account accountInfo={dataObj.accountInfo} />
        <ShareOnKakao shareInfo={dataObj.shareInfo} />
        <Foot />
      </StyleContentWrapper>
    </>
  );
}

const dataObj = {
  titleName: {
    groom: '서현우',
    bride: '고아람',
  },
  memberInfo: {
    groomParent: '서상진 • 홍순임',
    groomName: '현우',
    groomPhone: '01012345678',
    brideParent: '고진국 • 유지현',
    brideName: '아람',
    bridePhone: '01012345678',
  },
  calenderInfo: {
    year: 2022,
    month: 4,
    day: 9,
    time: 18,
  },
  locationInfo: {
    title: '팜파스 13',
    detail: '울산광역시 북구 명촌23길 44 1~4층',
    coord: [129.35525736980682, 35.557144505209039],
    appURL: `https://wedding-invitation-dun.vercel.app/`,
  },
  accountInfo: {
    groomParentName: '서상진',
    groomParentBank: '국민',
    groomParentAccount: '123456-78-123456',
    groomName: '서현우',
    groomBank: '카카오뱅크',
    groomAccount: '3333-03-1234567',
    brideParentName: '고진국',
    brideParentBank: '국민',
    brideParentAccount: '123456-78-123456',
    brideName: '고아람',
    brideBank: '카카오뱅크',
    brideAccount: '3333-03-1234567',
  },
  shareInfo: {
    title: '결혼식에 초대합니다',
    description: '현우 ❤ 아람',
    imageUrl: 'https://ifh.cc/g/9jWMKr.png',
    link: `https://wedding-invitation-dun.vercel.app/`,
  },
};
