import React from 'react';
import {
  StyleNotice,
  StyleNoticeContent,
  StyleNoticeTitle,
  StyleNoticeWrapper,
} from './Notice.styled';

const Notice = () => {
  return (
    <>
      <StyleNoticeWrapper>
        <StyleNotice>
          <StyleNoticeTitle>코로나 19 안내</StyleNoticeTitle>{' '}
          <StyleNoticeContent>
            <div>
              코로나 종식을 예측 할 수 없기에 결혼식을
              <br />
              미루지 않고 예정대로 진행하고자 합니다.
              <br />
              <br />
              전해주시는 축하의 마음만으로도 저희에겐
              <br />큰 기쁨이오니 저희 두 사람의 앞날을 위해
              <br />
              축하해 주시면 감사하겠습니다.
            </div>{' '}
          </StyleNoticeContent>
        </StyleNotice>
      </StyleNoticeWrapper>
    </>
  );
};

export default Notice;
