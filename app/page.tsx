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
        <StyleGreeting>
          {/* <img src="/flower.png" alt="flower" /> */}
          <div
            style={{
              padding: '6.25rem 0',
              whiteSpace: 'pre-wrap',
              lineHeight: '2rem',
              fontSize: '1.125rem',
            }}
          >
            두 사람이 꽃과 나무처럼 걸어와서
            <br />
            서로의 모든 것이 되기 위해
            <br />
            오랜 기다림 끝에 혼례식을 치르는 날
            <br />
            세상은 더욱 아름다워라
            <br />
            <br />
            이해인, &lt;사랑의 사람들이여&gt;
          </div>
          <div
            style={{
              padding: '3.125rem 0',
              whiteSpace: 'pre-wrap',
              lineHeight: '2rem',
              fontSize: '1.125rem',
            }}
          >
            <span
              style={{
                fontSize: `1.625rem`,
                color: '#f1965f',
                fontWeight: 'bold',
                letterSpacing: '0.3125rem',
              }}
            >
              초대합니다
            </span>
            <br />
            <div style={{ padding: '2rem 1rem', lineHeight: '2.5rem', letterSpacing: '0.125rem' }}>
              <div>
                살랑이는 바람결에
                <br />
                사랑이 묻어나는 계절입니다.
                <br />
                여기 곱고 예쁜 두 사람이
                <span>
                  <span style={{ color: '#f1965f', fontWeight: 'bold' }}>사랑</span>
                </span>
                을 맺어
                <br />
                인생의 반려자가 되려 합니다.
                <br />
                새 인생을 시작하는 이 자리에 오셔서
                <br />
                <span>
                  <span style={{ color: '#f1965f', fontWeight: 'bold' }}>축복</span>
                </span>
                해 주시면 감사하겠습니다.
              </div>
            </div>
          </div>
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

const StyleGreeting = styled.div``;
