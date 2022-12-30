'use client';

import Script from 'next/script';
import React from 'react';

const KaKaoScript = () => {
  const kakaoInit = () => {
    // 페이지가 로드되면 실행
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_MAP_API);
    // console.log(window.Kakao.isInitialized());
    // console.log(window.Kakao);
  };
  return (
    <>
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js"
        integrity="sha384-dpu02ieKC6NUeKFoGMOKz6102CLEWi9+5RQjWSV0ikYSFFd8M3Wp2reIcquJOemx"
        crossOrigin="anonymous"
        onLoad={kakaoInit}
      ></Script>
    </>
  );
};

export default KaKaoScript;
