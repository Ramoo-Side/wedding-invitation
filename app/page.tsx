'use client';

import Date from '#/components/Date';
import Greeting from '#/components/Greeting';
import Title from '#/components/Title';
import useZoomHooks from '#/hooks/useZoomHooks';
import styled from 'styled-components';

export default function Page() {
  const defaultImgUrl = '/default-wedding.png';
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
        <div style={{ lineHeight: 2 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: `0 11rem` }}>
            <div
              style={{
                fontSize: 22,
                letterSpacing: `0.3125rem`,
                color: '#333333',
                fontWeight: 500,
              }}
            >{`${'김철용 • 박덕자'}`}</div>
            <div
              style={{
                fontWeight: 'bold',
                color: 'rgb(138, 133, 127)',
                display: 'flex',
                alignItems: 'center',
                letterSpacing: '3px',
                justifyContent: 'space-around',
                width: '100px',
              }}
            >
              <span>의</span>
              <span style={{ display: 'inline-block', minWidth: '2rem', textAlign: 'center' }}>
                아들
              </span>
            </div>
            <div style={{ fontSize: 22, letterSpacing: `0.3125rem`, color: '#333333' }}>
              {`${'철수'}`}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src="/phone.png" alt="call" style={{ width: 22, marginLeft: 15 }} />
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: `0 11rem` }}>
            <div
              style={{
                fontSize: 22,
                letterSpacing: `0.3125rem`,
                color: '#333333',
                fontWeight: 500,
              }}
            >{`${'김덕춘 • 박미숙'}`}</div>
            <div
              style={{
                fontWeight: 'bold',
                color: 'rgb(138, 133, 127)',
                display: 'flex',
                alignItems: 'center',
                letterSpacing: '3px',
                justifyContent: 'space-around',
                width: '100px',
              }}
            >
              <span>의</span>
              <span style={{ display: 'inline-block', minWidth: '2rem', textAlign: 'center' }}>
                딸
              </span>
            </div>
            <div style={{ fontSize: 22, letterSpacing: `0.3125rem`, color: '#333333' }}>
              {`${'영희'}`}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src="/phone.png" alt="call" style={{ width: 22, marginLeft: 15 }} />
            </div>
          </div>
        </div>
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
  padding-bottom: 2.5rem;
  position: relative;
  margin-top: -1.5625rem;
`;

const StyleGreeting = styled.div`
  padding-top: 6.25rem;
`;

const StylePhoto2ndWrapper = styled.div`
  width: 25rem;
  border-bottom: 2px solid #f1965f;
  margin: 2.5rem auto;
  display: flex;
  justify-content: center;
`;

const StylePhoto2nd = styled.img`
  width: 18.75rem;
  padding-bottom: 2.5rem;
`;
