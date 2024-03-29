import Image from 'next/image';
import styled from 'styled-components';

export const StyleContentWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 450px;
  min-width: 450px;
  padding: 0;
  margin: 0 auto;
  background: #fff;
  line-height: 2rem;
  padding-top: 1px;
`;

export const StylePhoto = styled.div`
  height: 28.125rem;
  background-image: url(${(props) => props.url});
  background-size: cover;
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

export const StylePhoto2nd = styled(Image)`
  width: 21.75rem;
  padding-bottom: 2.5rem;
`;
