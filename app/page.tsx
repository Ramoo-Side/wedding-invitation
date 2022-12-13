'use client';

import Date from '#/components/Date';
import Greeting from '#/components/Greeting';
import Title from '#/components/Title';
import useZoomHooks from '#/hooks/useZoomHooks';
import styled from 'styled-components';

export default function Page() {
  const defaultImgUrl = '/default-wedding.png';

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
        {/* <div>작은 가로 사진</div> */}
        {/* <div>누구의 아들 누구</div> */}
        {/* <div>누구의 딸 누구</div> */}
        {/* <div>혼주 연락처 버튼 모달</div> */}
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

const StyleContentWrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
`;

const StyleTitleWrapper = styled.div`
  position: relative;
  z-index: 10;
  margin: 4.375rem auto 0;
`;

const StyleDateWrapper = styled.div`
  padding: 3.125rem 0;
  font-size: 1.5rem;
  letter-spacing: 0.3125rem;
  line-height: 2rem;
  text-shadow: -1px -1px 0 #fff;
  & :first-child {
    display: inline-block;
    border-bottom: 0.3125rem solid #eee;
    padding-bottom: 0.3125rem;
  }
  & :last-child {
    padding-top: 0.3125rem;
  }
`;

const StylePhotoWrapper = styled.div`
  height: 28.125rem;
  background-image: url(${(props) => props.url});
  background-size: cover;
  padding-bottom: 40px;
  position: relative;
  margin-top: -1.5625rem;
`;

const StyleGreeting = styled.div`
  padding-top: 6.25rem;
`;
