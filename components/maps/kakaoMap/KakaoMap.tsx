'use client';

import React, { useRef } from 'react';
import KaKaoMapScripts from '../../scripts/KaKaoMapScripts';
import { StyleMap, StyleMapWrapper } from './KakaoMap.styled';
import Location from '../location/Location';
import Navigation from '../navigation/Navigation';
import WayToCome from '../wayToCome/WayToCome';

export interface IProps {
  locationInfo: {
    title: string;
    detail: string;
    coord: number[];
    appURL: string;
  };
}

const KakaoMap = ({ locationInfo }: IProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <StyleMapWrapper>
        <Location locationInfo={locationInfo} />
        <KaKaoMapScripts containerRef={containerRef} />
        <StyleMap id="map" ref={containerRef} />
        <Navigation locationInfo={locationInfo} />
        <WayToCome />
      </StyleMapWrapper>
    </>
  );
};

export default KakaoMap;
