'use client';

import React, { useRef } from 'react';
import KaKaoScripts from '../../scripts/KaKaoScripts';
import { StyleMap } from './KakaoMap.styled';
import Location from '../location/Location';
import Navigation from '../navigation/Navigation';
import WayToCome from '../wayToCome/WayToCome';

const KakaoMap = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Location />
      <KaKaoScripts containerRef={containerRef} />
      <StyleMap id="map" ref={containerRef} />
      <Navigation />
      <WayToCome />
    </>
  );
};

export default KakaoMap;
