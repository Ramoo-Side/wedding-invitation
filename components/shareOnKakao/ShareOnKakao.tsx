import React from 'react';

const ShareOnKakao = () => {
  const shareOnKakaoFunc = () => {
    const options = {
      objectType: 'feed',
      content: {
        title: '결혼식에 초대합니다',
        description: '철수 ❤ 영희',
        imageUrl: 'https://ifh.cc/g/9jWMKr.png',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
    };

    window.Kakao.Share.sendDefault(options);
  };

  return (
    <>
      <div
        style={{
          marginTop: '60px',
          padding: '30px 0',
          background: '#f1965f12',
          lineHeight: '2rem',
        }}
      >
        <div
          onClick={shareOnKakaoFunc}
          style={{
            margin: '0px auto',
            width: '300px',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src="kakaotalk-white-logo.png" style={{ width: 30, height: 30 }} />
          <span style={{ width: '11rem', marginLeft: 10 }}>카카오톡으로 공유하기</span>
        </div>
        <div
          // onClick={shareOnKakaoFunc}
          style={{
            margin: '0px auto',
            width: '300px',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src="link.png" style={{ width: 20, height: 20 }} />
          <span style={{ width: '11rem', marginLeft: 10 }}>청첩장 주소 복사하기</span>
        </div>
      </div>
    </>
  );
};

export default ShareOnKakao;
