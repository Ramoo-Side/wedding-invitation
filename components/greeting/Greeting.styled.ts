import styled from 'styled-components';

export const StyleGreeting = styled.div`
  text-align: center;
  padding-top: 6.25rem;
`;

export const StyleFlowerImg = styled.img`
  height: 4.5rem;
`;

export const StylePoetry = styled.div((props) => ({
  padding: '3.25rem 4.25rem 6.25rem',
  whiteSpace: 'pre-wrap',
  lineHeight: '2rem',
  fontSize: '1.125rem',
}));

export const StyleInviteWrapper = styled.div(() => ({
  padding: '3.125rem 0',
  whiteSpace: 'pre-wrap',
  lineHeight: '2rem',
  fontSize: '1.125rem',
}));

export const StyleInviteTitle = styled.span`
  font-size: 1.625rem;
  color: #f1965f;
  font-weight: bold;
  letter-spacing: 0.3125rem;
`;

export const StyleInviteContents = styled.div`
  padding: 2rem 1rem;
  line-height: 2.5rem;
  letter-spacing: 0.125rem;
`;

export const StyleHighlightText = styled.span`
  color: #f1965f;
  font-weight: bold;
`;
