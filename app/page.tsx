'use client';

import useZoomHooks from '#/hooks/useZoomHooks';
import styled from 'styled-components';

export default function Page() {
  const defaultImgUrl = '/default-wedding.png';
  const defaultTitleUrl = '/Record-to-Moment.png';

  useZoomHooks();

  return (
    <>
      <StyleContentWrapper>
        <StyleTitleWrapper>
          <StyleTitle>
            <StyleImgWrapper>
              <img src={defaultTitleUrl} alt="record to moment" />
            </StyleImgWrapper>
            <StyleName>
              <span>{'김철수'}</span>
              <span>{'김영희'}</span>
            </StyleName>
          </StyleTitle>
        </StyleTitleWrapper>
        <StylePhotoWrapper url={defaultImgUrl}></StylePhotoWrapper>
        <StyleDateWrapper>
          <div>{'2022년 4월 9일 토요일 오후 6시'}</div>
          <div>{'팜파스 13 (구 더 자스민 하우스)'}</div>
        </StyleDateWrapper>
        {/* <div>인사말 시 삽입</div>
        <div>초대말</div>
        <div>작은 가로 사진</div>
        <div>누구의 아들 누구</div>
        <div>누구의 딸 누구</div>
        <div>혼주 연락처 버튼 모달</div>
        <div>날짜 달력</div>
        <div>가로 캐러우쉘 갤러리</div>
        <div>오시는길 지도</div>
        <div>코로나 인사말</div>
        <div>마음 전하실 곳</div>
        <div>카카오톡으로 공유하기</div> */}
      </StyleContentWrapper>
    </>
  );
}

const StyleTitleWrapper = styled.div`
  position: relative;
  z-index: 10;
  margin: 4.375rem auto 0;
`;

const StyleImgWrapper = styled.div`
  position: relative;
  padding-bottom: 5.3125rem;

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0.625rem;
    width: 2px;
    height: 4rem;
    background: #eee;
  }

  & > img {
    max-width: 100%;
    height: 11.25rem;
  }
`;

const StyleContentWrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
`;

const StyleTitle = styled.div`
  display: inline-block;
  vertical-align: top;
  padding: 2.125rem 1rem 3.125rem;
  text-align: center;
  border: 3px solid #e1bda7;
`;

const StyleName = styled.p`
  margin: 0;
  & span {
    display: block;
    font-size: 1.625rem;
    font-weight: 500;
    line-height: 2.125rem;
    letter-spacing: 0.2em;
  }
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
