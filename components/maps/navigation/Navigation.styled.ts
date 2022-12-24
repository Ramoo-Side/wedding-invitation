import styled from 'styled-components';

export const StyleNaviWrapper = styled.div`
  padding: 6px 10px;
  display: flex;
  color: #000;
  font-size: 16px;
  height: 1.8rem;
  background: #f1965f3b;

  & > div {
    flex: 1;
    margin: auto;
    height: 1.1rem;
    line-height: 1.1rem;
    border-right: 1px solid rgba(97, 80, 67, 0.15);
    text-align: center;
    cursor: pointer;
  }

  & > div:last-child {
    border-right: none;
  }
`;

export const StyleNaviLogo = styled.img(() => ({
  position: 'relative',
  top: '-1px',
  width: '18px',
  height: '18px',
  verticalAlign: 'middle',
  marginRight: '4px',
  borderRadius: '16%',
}));

export const StyleNaverWrapper = styled.div``;
export const StyleKakaoWrapper = styled.div``;
export const StyleTmapWrapper = styled.div``;
