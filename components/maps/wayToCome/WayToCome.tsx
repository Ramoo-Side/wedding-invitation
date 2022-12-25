import React from 'react';
import { StyleWayToComeWrapper } from './WayToCome.styled';

const WayToCome = () => {
  return (
    <StyleWayToComeWrapper>
      <div style={{ marginTop: 20 }}>
        <div
          style={{
            fontSize: `1.2rem`,
            color: `#f1965f`,
            fontWeight: '500',
            letterSpacing: 1.5,
            marginBottom: 10,
          }}
        >
          <span>버스안내</span>
        </div>
        <div style={{ lineHeight: '1.7rem', color: '#333' }}>
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
        </div>
      </div>
    </StyleWayToComeWrapper>
  );
};

export default WayToCome;
