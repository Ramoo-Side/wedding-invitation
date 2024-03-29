'use client';

import React, { useEffect, useState } from 'react';
import {
  StyleAccountWrapper,
  StyleContent,
  StyleCopyButton,
  StyleGroom,
  StyleGroomAccount,
  StyleGroomAccountWrapper,
  StyleGroomWrapper,
  StyleTitle,
} from './Account.styled';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Swal from 'sweetalert2';

export interface IProps {
  accountInfo: {
    groomParentName: string;
    groomParentBank: string;
    groomParentAccount: string;
    groomName: string;
    groomBank: string;
    groomAccount: string;
    brideParentName: string;
    brideParentBank: string;
    brideParentAccount: string;
    brideName: string;
    brideBank: string;
    brideAccount: string;
  };
}

const Account = ({ accountInfo }: IProps) => {
  const [groomOpen, setGroomOpen] = useState(false);
  const [brideOpen, setBrideOpen] = useState(false);
  const 신랑계좌 = [
    {
      name: accountInfo.groomParentName,
      bank: accountInfo.groomParentBank,
      account: accountInfo.groomParentAccount,
    },
    {
      name: accountInfo.groomName,
      bank: accountInfo.groomBank,
      account: accountInfo.groomAccount,
    },
  ];
  const 신부계좌 = [
    {
      name: accountInfo.brideParentName,
      bank: accountInfo.brideParentBank,
      account: accountInfo.brideParentAccount,
    },
    {
      name: accountInfo.brideName,
      bank: accountInfo.brideBank,
      account: accountInfo.brideAccount,
    },
  ];

  const copyHandle = (text: string, result: boolean) => {
    if (result) {
      Swal.fire({
        title: `<span style='font-size: 20px'>계좌번호를 복사했습니다</span>`,
        text,
        showConfirmButton: false,
        width: `20rem`,
        timer: 1000,
        timerProgressBar: true,
      });
    }
  };

  return (
    <StyleAccountWrapper>
      <StyleTitle>마음 전하실 곳</StyleTitle>
      <StyleContent>
        <StyleGroom>
          <StyleGroomWrapper onClick={() => setGroomOpen((groomOpen) => !groomOpen)}>
            신랑측 계좌번호
          </StyleGroomWrapper>
          {신랑계좌.map((ele) => (
            <StyleGroomAccountWrapper key={`${ele.name}_${ele.account}`} $open={groomOpen}>
              <StyleGroomAccount>
                <span>
                  <span>{ele.bank}</span>
                  <span>{ele.account}</span>
                </span>
                <br />
                <span>{ele.name}</span>
              </StyleGroomAccount>
              <CopyToClipboard text={ele.account.split('-').join('')} onCopy={copyHandle}>
                <StyleCopyButton>복사하기</StyleCopyButton>
              </CopyToClipboard>
            </StyleGroomAccountWrapper>
          ))}
        </StyleGroom>
        <StyleGroom>
          <StyleGroomWrapper onClick={() => setBrideOpen((brideOpen) => !brideOpen)}>
            신부측 계좌번호
          </StyleGroomWrapper>
          {신부계좌.map((ele) => (
            <StyleGroomAccountWrapper key={`${ele.name}_${ele.account}`} $open={brideOpen}>
              <StyleGroomAccount>
                <span>
                  <span>{ele.bank}</span>
                  <span>{ele.account}</span>
                </span>
                <br />
                <span>{ele.name}</span>
              </StyleGroomAccount>
              <CopyToClipboard text={ele.account.split('-').join('')} onCopy={copyHandle}>
                <StyleCopyButton>복사하기</StyleCopyButton>
              </CopyToClipboard>
            </StyleGroomAccountWrapper>
          ))}
        </StyleGroom>
      </StyleContent>
    </StyleAccountWrapper>
  );
};

export default Account;
