'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { StyleCopyright, StyleFooter } from './footer.styled';

export default function Foot() {
  const router = useRouter();
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    if (clickCount > 4) {
      router.push('/edit');
    }
  }, [clickCount]);

  return (
    <>
      <StyleFooter
      // onClick={() => setClickCount((preCount) => preCount + 1)}
      >
        <StyleCopyright>Copyright 2023. Wedding-Invitation. All rights reserved.</StyleCopyright>
      </StyleFooter>
    </>
  );
}
