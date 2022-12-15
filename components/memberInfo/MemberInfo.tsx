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
          <StyleGroomParents>{`${'김철용 • 박덕자'}`}</StyleGroomParents>
          <StyleGroomMiddle>
            <span>의</span>
            <StyleGroomMiddleSpan>아들</StyleGroomMiddleSpan>
          </StyleGroomMiddle>
          <StyleGroomName>{`${'철수'}`}</StyleGroomName>
          <StyleCallWrapper>
            <StyleCallIcon src="/phone.png" alt="call" />
          </StyleCallWrapper>
        </StyleGroomWrapper>
        <StyleBrideWrapper>
          <StyleBrideParents>{`${'김덕춘 • 박미숙'}`}</StyleBrideParents>
          <StyleBrideMiddle>
            <span>의</span>
            <StyleBrideMiddleSpan>딸</StyleBrideMiddleSpan>
          </StyleBrideMiddle>
          <StyleBrideName>{`${'영희'}`}</StyleBrideName>
          <StyleCallWrapper>
            <StyleCallIcon src="/phone.png" alt="call" />
          </StyleCallWrapper>
        </StyleBrideWrapper>
      </StyleMemberInfoWrapper>
    </>
  );
};

export default MemberInfo;
