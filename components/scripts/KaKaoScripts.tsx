'use client';

import Script from 'next/script';
import React, { useCallback, useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

export interface IProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const KaKaoScripts = ({ containerRef }: IProps) => {
  const initMap = useCallback(() => {
    if (containerRef?.current) {
      const map = new window.kakao.maps.Map(containerRef.current, {
        center: new window.kakao.maps.LatLng(35.55714450520903, 129.35525736980682),
        level: 3,
      });
      let markerPosition = new window.kakao.maps.LatLng(35.55714450520903, 129.35525736980682);
      let marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);
    }
  }, []);

  useEffect(() => {
    if (window?.kakao) {
      initMap();
    }
  }, [initMap]);

  return (
    <>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API}&autoload=false`}
        onLoad={() => window.kakao.maps.load(initMap)}
      />
    </>
  );
};

export default KaKaoScripts;
