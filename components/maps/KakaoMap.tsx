'use client';

import React, { useRef } from 'react';
import KaKaoScripts from '../scripts/KaKaoScripts';
import { StyleMap } from './KakaoMap.styled';

const KakaoMap = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <KaKaoScripts containerRef={containerRef} />
      <StyleMap id="map" ref={containerRef} />
    </>
  );
};

export default KakaoMap;
