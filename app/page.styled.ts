import styled from 'styled-components';

export const StyleContentWrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
`;

export const StylePhoto = styled.div`
  height: 28.125rem;
  background-image: url(${(props) => props.url});
  background-size: cover;
  padding-bottom: 2.5rem;
  position: relative;
  margin-top: -1.5625rem;
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
