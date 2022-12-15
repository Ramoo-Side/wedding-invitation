'use client';

import Date from '#/components/date/Date';
import Greeting from '#/components/greeting/Greeting';
import MemberInfo from '#/components/memberInfo/MemberInfo';
import Title from '#/components/title/Title';
import useZoomHooks from '#/hooks/useZoomHooks';
import styled from 'styled-components';
import {
  StyleContentWrapper,
  StyleDateWrapper,
  StyleGreeting,
  StylePhoto2nd,
  StylePhoto2ndWrapper,
  StylePhotoWrapper,
  StyleTitleWrapper,
} from './page.styled';

export default function Page() {
  const defaultImgUrl = '/couple4.png';
  const default2ndImgUrl = '/couple7.png';

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
          <StyleCallButton>혼주에게 연락하기</StyleCallButton>
        </StyleCallButtonWrapper>
        {/* <div>날짜 달력</div> */}
        {/* <div>가로 캐러우쉘 갤러리</div> */}
        {/* <div>오시는길 지도</div> */}
        {/* <div>코로나 인사말</div> */}
        {/* <div>마음 전하실 곳</div> */}
        {/* <div>카카오톡으로 공유하기</div> */}
      </StyleContentWrapper>
    </>
  );
}

const StyleCallButtonWrapper = styled.div(() => ({
  padding: 40,
  marginTop: 20,
}));

const StyleCallButton = styled.span`
  & {
    position: relative;
    background-color: white;
    border: 1px solid #f1965f;
    border-radius: 0.625rem;
    font-size: 1.125rem;
    font-weight: bold;
    color: #f1965f;
    padding: 1.25rem 7.8125rem;
    cursor: pointer;
    user-select: none;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    transition-duration: 0.4s;
  }

  &:hover {
    transition-duration: 0.1s;
    background-color: #f1965f;
    color: #fff;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    border-radius: 0.625rem;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.7s;
    box-shadow: 0 0 0.625rem 1.25rem #f1965f;
  }

  &:active:after {
    box-shadow: 0 0 0 0 #f1965f;
    position: absolute;
    border-radius: 0.625rem;
    left: 0;
    top: 0;
    opacity: 1;
    transition: 0s;
  }

  &:active {
    top: 0.0625rem;
  }
`;
