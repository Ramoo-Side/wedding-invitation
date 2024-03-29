import styled from 'styled-components';

export const StyleDateWrapper = styled.div`
  padding: 3.125rem 0;
  font-size: 1.2rem;
  letter-spacing: 0.3rem;
  line-height: 2rem;
  text-shadow: -1px -1px 0 #fff;
  text-align: center;
  & :first-child {
    display: inline-block;
    border-bottom: 0.3125rem solid #eee;
    padding-bottom: 0.3125rem;
  }
  & :last-child {
    padding-top: 0.3125rem;
  }
`;
