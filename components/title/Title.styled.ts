import styled from 'styled-components';

export const StyleImgWrapper = styled.div`
  position: relative;
  padding-bottom: 5.3125rem;

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0.625rem;
    width: 2px;
    height: 4rem;
    background: #eee;
  }

  & > img {
    max-width: 100%;
    height: 11.25rem;
  }
`;

export const StyleName = styled.p`
  margin: 0;
  & span {
    display: block;
    font-size: 1.625rem;
    font-weight: 500;
    line-height: 2.125rem;
    letter-spacing: 0.2em;
  }
`;

export const StyleTitle = styled.div`
  display: inline-block;
  vertical-align: top;
  padding: 2.125rem 1rem 3.125rem;
  text-align: center;
  border: 3px solid #f1965fad;
`;
