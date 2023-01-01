'use client';

import { useEffect, useState } from 'react';
import { StyleCopyright, StyleFooter } from './footer.styled';

export default function Foot() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <>
      <StyleFooter onClick={() => setClickCount((preCount) => preCount + 1)}>
        <StyleCopyright>Copyright 2023. Wedding-Invitation. All rights reserved.</StyleCopyright>
      </StyleFooter>
    </>
  );
}
