import styled from 'styled-components';

export const StyleNoticeWrapper = styled.div(() => ({
  padding: `0rem 6.25rem`,
  margin: `0 auto`,
}));

export const StyleNotice = styled.div(() => ({
  background: 'hsla(0,0%,100%,.3)',
  boxShadow: '1px 1px 3px rgba(0,0,0,.05)',
  border: '2px solid #f1965f',
  borderRadius: '4px',
  padding: `2.25rem 1.25rem`,
}));

export const StyleNoticeTitle = styled.div(() => ({
  color: '#f19a79',
  fontSize: '1.25rem',
  marginBottom: '1.125rem',
}));

export const StyleNoticeContent = styled.div(() => ({
  fontSize: '1.125rem',
  lineHeight: '2.5rem',
}));
