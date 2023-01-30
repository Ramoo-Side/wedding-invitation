import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Swal from 'sweetalert2';
import {
  StyleCopyLogo,
  StyleKakao,
  StyleKaKaoLogo,
  StyleLink,
  StyleShareWrapper,
  StyleText,
} from './ShareOnKakao.styled';

const ShareOnKakao = () => {
  const shareOnKakaoFunc = () => {
    const options = {
      objectType: 'feed',
      content: {
        title: '결혼식에 초대합니다',
        description: '철수 ❤ 영희',
        imageUrl: 'https://ifh.cc/g/9jWMKr.png',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
    };

    window.Kakao.Share.sendDefault(options);
  };

  const copyHandle = (text: string, result: boolean) => {
    if (result) {
      Swal.fire({
        title: `<span style='font-size: 20px'>주소를 복사했습니다</span>`,
        // text,
        showConfirmButton: false,
        width: `20rem`,
        timer: 1000,
      });
    }
  };

  return (
    <>
      <StyleShareWrapper>
        <StyleKakao onClick={shareOnKakaoFunc}>
          <StyleKaKaoLogo src="kakaotalk-white-logo.png" />
          <StyleText>카카오톡으로 공유하기</StyleText>
        </StyleKakao>
        <CopyToClipboard
          text={`${typeof window !== 'undefined' ? window.location.href : ''}`}
          onCopy={copyHandle}
        >
          <StyleLink>
            <StyleCopyLogo>
              <img src="link.png" width={20} height={20} />
            </StyleCopyLogo>
            <StyleText>청첩장 주소 복사하기</StyleText>
          </StyleLink>
        </CopyToClipboard>
      </StyleShareWrapper>
    </>
  );
};

export default ShareOnKakao;
