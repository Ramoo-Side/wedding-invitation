import React from 'react';
import {
  StyleBrideMiddle,
  StyleBrideMiddleSpan,
  StyleBrideName,
  StyleBrideParents,
  StyleBrideWrapper,
  StyleCallIcon,
  StyleCallWrapper,
  StyleGroomMiddle,
  StyleGroomMiddleSpan,
  StyleGroomName,
  StyleGroomParents,
  StyleGroomWrapper,
  StyleMemberInfoWrapper,
} from './MemberInfo.styled';

const MemberInfo = () => {
  return (
    <>
      <StyleMemberInfoWrapper>
        <StyleGroomWrapper>
          <StyleGroomParents>{`${'서상진 • 홍순임'}`}</StyleGroomParents>
          <StyleGroomMiddle>
            <span>의</span>
            <StyleGroomMiddleSpan>아들</StyleGroomMiddleSpan>
          </StyleGroomMiddle>
          <StyleGroomName>{`${'현우'}`}</StyleGroomName>
          <StyleCallWrapper>
            <StyleCallIcon src="/phone.png" alt="call" />
          </StyleCallWrapper>
        </StyleGroomWrapper>
        <StyleBrideWrapper>
          <StyleBrideParents>{`${'고진국 • 유지현'}`}</StyleBrideParents>
          <StyleBrideMiddle>
            <span>의</span>
            <StyleBrideMiddleSpan>딸</StyleBrideMiddleSpan>
          </StyleBrideMiddle>
          <StyleBrideName>{`${'아람'}`}</StyleBrideName>
          <StyleCallWrapper>
            <StyleCallIcon src="/phone.png" alt="call" />
          </StyleCallWrapper>
        </StyleBrideWrapper>
      </StyleMemberInfoWrapper>
    </>
  );
};

export default MemberInfo;
