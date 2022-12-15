import styled from 'styled-components';

export const StyleContentWrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
`;

export const StyleTitleWrapper = styled.div`
  position: relative;
  z-index: 10;
  margin: 4.375rem auto 0;
`;

export const StyleDateWrapper = styled.div`
  padding: 3.125rem 0;
  font-size: 1.5rem;
  letter-spacing: 0.3125rem;
  line-height: 2rem;
  text-shadow: -1px -1px 0 #fff;
  & :first-child {
    display: inline-block;
    border-bottom: 0.3125rem solid #eee;
    padding-bottom: 0.3125rem;
  }
  & :last-child {
    padding-top: 0.3125rem;
  }
`;

export const StylePhotoWrapper = styled.div`
  height: 28.125rem;
  background-image: url(${(props) => props.url});
  background-size: cover;
  padding-bottom: 2.5rem;
  position: relative;
  margin-top: -1.5625rem;
`;

export const StyleGreeting = styled.div`
  padding-top: 6.25rem;
`;

export const StylePhoto2ndWrapper = styled.div`
  width: 25rem;
  border-bottom: 2px solid #f1965f;
  margin: 2.5rem auto;
  display: flex;
  justify-content: center;
`;

export const StylePhoto2nd = styled.img`
  width: 18.75rem;
  padding-bottom: 2.5rem;
`;
