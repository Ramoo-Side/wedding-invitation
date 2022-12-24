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
  StyleCalendarWrapper,
  StyleCallButtonWrapper,
  StyleContentWrapper,
  StyleDateWrapper,
  StyleGalleryWrapper,
  StyleGreeting,
  StyleMapWrapper,
  StylePhoto2nd,
  StylePhoto2ndWrapper,
  StylePhotoWrapper,
  StyleTitleWrapper,
} from './page.styled';

export default function Page() {
  const defaultImgUrl = 'test/couple/couple4.png';
  const default2ndImgUrl = 'test/couple/couple7.png';

  useZoomHooks();

  return (
    <>
      <StyleContentWrapper>
        <StyleTitleWrapper>
          <Title names={['김철수', '김영희']} />
        </StyleTitleWrapper>
        <StylePhotoWrapper url={defaultImgUrl} />
        <StyleDateWrapper>
          <Date />
        </StyleDateWrapper>
        <StyleGreeting>
          <Greeting />
        </StyleGreeting>
        <StylePhoto2ndWrapper>
          <StylePhoto2nd src={default2ndImgUrl} alt="2nd img" />
        </StylePhoto2ndWrapper>
        <MemberInfo />
        <StyleCallButtonWrapper>
          <Call />
        </StyleCallButtonWrapper>
        <StyleCalendarWrapper>
          <Calendar />
        </StyleCalendarWrapper>
        <StyleGalleryWrapper>
          <Gallery />
        </StyleGalleryWrapper>
        <StyleMapWrapper>
          <KakaoMap />
        </StyleMapWrapper>
        {/* <div>코로나 인사말</div> */}
        {/* <div>마음 전하실 곳</div> */}
        {/* <div>카카오톡으로 공유하기</div> */}
      </StyleContentWrapper>
    </>
  );
}
