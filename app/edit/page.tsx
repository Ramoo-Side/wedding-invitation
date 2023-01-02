'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

const Page = () => {
  const router = useRouter();

  return (
    <StyleContentWrapper>
      <div>INPUT</div>
      <div>INPUT</div>
      <div>INPUT</div>
      <div>INPUT</div>
      <div>INPUT</div>
      <button type="button" onClick={() => router.push('/')}>
        저장 및 돌아가기
      </button>
    </StyleContentWrapper>
  );
};

export default Page;

const StyleContentWrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
`;
