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

export interface IProps {
  memberInfo: {
    groomParent: string;
    groomName: string;
    groomPhone: string;
    brideParent: string;
    brideName: string;
    bridePhone: string;
  };
}

const MemberInfo = ({ memberInfo }: IProps) => {
  return (
    <>
      <StyleMemberInfoWrapper>
        <StyleGroomWrapper>
          <StyleGroomParents>{`${memberInfo.groomParent}`}</StyleGroomParents>
          <StyleGroomMiddle>
            <span>의</span>
            <StyleGroomMiddleSpan>아들</StyleGroomMiddleSpan>
          </StyleGroomMiddle>
          <StyleGroomName>{`${memberInfo.groomName}`}</StyleGroomName>
          <StyleCallWrapper>
            <StyleCallIcon
              src="/phone.png"
              alt="call"
              onClick={() => (location.href = `tel:${memberInfo.groomPhone}`)}
            />
          </StyleCallWrapper>
        </StyleGroomWrapper>
        <StyleBrideWrapper>
          <StyleBrideParents>{`${memberInfo.brideParent}`}</StyleBrideParents>
          <StyleBrideMiddle>
            <span>의</span>
            <StyleBrideMiddleSpan>딸</StyleBrideMiddleSpan>
          </StyleBrideMiddle>
          <StyleBrideName>{`${memberInfo.brideName}`}</StyleBrideName>
          <StyleCallWrapper>
            <StyleCallIcon
              src="/phone.png"
              alt="call"
              onClick={() => (location.href = `tel:${memberInfo.bridePhone}`)}
            />
          </StyleCallWrapper>
        </StyleBrideWrapper>
      </StyleMemberInfoWrapper>
    </>
  );
};

export default MemberInfo;
