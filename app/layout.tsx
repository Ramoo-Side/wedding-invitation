'use client';

import React, { useEffect, useState } from 'react';
import RootStyleRegistry from '../lib/RootStyleRegistry';
import Foot from './footer';
import '../styles/customGlobalStyles.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [renderCheck, setRenderCheck] = useState(false);

  useEffect(() => {
    setRenderCheck(true);
  }, []);

  /*
  TODO 로딩 좀 더 세련되게 구현
  TODO footer 도 로딩 시에는 안보이게 해야할거같음. 왜 나오는지 모르겠음.
  * Foot 주석 처리하고 렌더링하면 로딩 때 안나옴.
   * Foot 주석 처리 안하고 렌더링하면 로딩 떄 나옴. 확인하기.
   */

  return (
    <html>
      <body>
        {!renderCheck ? (
          <></>
        ) : (
          <>
            <RootStyleRegistry>{children}</RootStyleRegistry>
            <Foot />
          </>
        )}
      </body>
    </html>
  );
}
