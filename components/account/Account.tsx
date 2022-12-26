import React from 'react';
import {
  StyleAccountWrapper,
  StyleContent,
  StyleCopyButton,
  StyleGroomAccount,
  StyleGroomAccountWrapper,
  StyleGroomWrapper,
  StyleTitle,
} from './Account.styled';

const Account = () => {
  return (
    <StyleAccountWrapper>
      <StyleTitle>마음 전하실 곳</StyleTitle>
      <StyleContent>
        <StyleGroomWrapper>신랑측 계좌번호</StyleGroomWrapper>
        <StyleGroomAccountWrapper>
          <StyleGroomAccount>
            <span>
              <span>국민</span>
              <span>123456-78-123456</span>
            </span>
            <br />
            <span>김철용</span>
          </StyleGroomAccount>
          <StyleCopyButton>복사하기</StyleCopyButton>
        </StyleGroomAccountWrapper>
        {/* <div
          style={{
            height: 72,
            position: 'relative',
            overflow: 'hidden',
            transition: '.5s ease-out',
            fontSize: 'min(.85rem,16px)',
            borderTop: '1px solid #eee',
            marginTop: '-1px',
          }}
        >
          <div
            style={{
              padding: '10px',
              lineHeight: '26px',
              letterSpacing: '0',
              textAlign: 'left',
              background: 'hsla(0,0%,100%,.75)',
            }}
          >
            <span>
              <span>국민</span>
              <span>123456-78-123456</span>
            </span>
            <br />
            <span>김철수</span>
          </div>
          <div>
            <div
              style={{
                position: 'absolute',
                right: '10px',
                top: '15px',
                width: '60px',
                cursor: 'pointer',
                padding: '0 4px',
                fontSize: '12px',
                fontWeight: '600',
                lineHeight: '24px',
                borderRadius: '2px',
                background: '#f2efed',
                color: '#e56623',
              }}
            >
              복사하기
            </div>
          </div>
        </div> */}
      </StyleContent>
    </StyleAccountWrapper>
  );
};

export default Account;
