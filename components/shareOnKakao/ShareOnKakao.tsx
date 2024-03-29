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

export interface IProps {
  shareInfo: {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
  };
}

const ShareOnKakao = ({ shareInfo }: IProps) => {
  const shareOnKakaoFunc = () => {
    const options = {
      objectType: 'feed',
      content: {
        title: shareInfo.title,
        description: shareInfo.description,
        imageUrl: shareInfo.imageUrl,
        link: {
          mobileWebUrl: shareInfo.link,
          webUrl: shareInfo.link,
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
