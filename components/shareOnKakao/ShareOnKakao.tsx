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

  return <button onClick={shareOnKakaoFunc}>공유하기</button>;
};

export default ShareOnKakao;
