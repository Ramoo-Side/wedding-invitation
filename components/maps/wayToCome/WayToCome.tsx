import React from 'react';
import { StyleContent, StyleTitle, StyleWayToComeWrapper } from './WayToCome.styled';

const WayToCome = () => {
  return (
    <StyleWayToComeWrapper>
      <StyleTitle>
        <span>버스안내</span>
      </StyleTitle>
      <StyleContent>
        <div>
          {`[ KTX 울산역 기준 ]`}
          <br />
          {`5001 -> 401 명촌정문앞 하차`}
          <br />
          {`5003 -> 947 명촌동 하차`}
          <br />
          {`5004 -> 427 명촌동 하차`}
          <p></p>
          {`[ 태화강역 기준 ]`}
          <br />
          {`107, 127, 401, 411, 427`}
        </div>
      </StyleContent>
    </StyleWayToComeWrapper>
  );
};

export default WayToCome;
