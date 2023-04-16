'use client';

import React, { useEffect, useState } from 'react';
import RootStyleRegistry from '../lib/RootStyleRegistry';
import '../styles/customGlobalStyles.css';
import Loading from './loading';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [renderCheck, setRenderCheck] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRenderCheck(true);
    }, 2000);
  }, []);

  return (
    <html>
      <body>
        {!renderCheck && <Loading />}
        <div
          style={{
            visibility: renderCheck ? 'visible' : 'hidden',
            position: renderCheck ? 'unset' : 'fixed',
          }}
        >
          <RootStyleRegistry>{children}</RootStyleRegistry>
        </div>
        {/* {renderCheck ? <RootStyleRegistry>{children}</RootStyleRegistry> : <Loading />} */}
      </body>
    </html>
  );
}
