'use client';

import styled from 'styled-components';

export default function Page() {
  return (
    <>
      <StyleWrapper>
        <StyleTitleWrapper>
          <h1>타이틀</h1>
          <StyleP>이름</StyleP>
        </StyleTitleWrapper>
        <div>사진</div>
      </StyleWrapper>
    </>
  );
}

const StyleP = styled.p`
  font-size: 50px;
`;

const StyleWrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;

const StyleTitleWrapper = styled.div`
  border: 1px solid #455560;
`;
