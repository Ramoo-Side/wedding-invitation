import styled from 'styled-components';

export const StyleAccountWrapper = styled.div(() => ({
  padding: '3.125rem 0',
  textAlign: 'center',
  lineHeight: '2rem',
}));

export const StyleTitle = styled.div(() => ({
  fontSize: '1.625rem',
  color: '#f1965f',
  fontWeight: 'bold',
  letterSpacing: '0.3125rem',
  marginBottom: '1.875rem',
}));

export const StyleContent = styled.div(() => ({
  maxWidth: '32.5rem',
  margin: '2rem auto 0',
  fontSize: '1rem',
}));

export const StyleGroom = styled.div(() => ({
  marginTop: 8,
}));

export const StyleGroomWrapper = styled.div(() => ({
  position: 'relative',
  margin: '0 auto',
  padding: '0.25rem 0',
  background: '#f1965f3b',
  color: '#4a3541',
  textAlign: 'center',
  cursor: 'pointer',
}));

export const StyleGroomAccountWrapper = styled.div((props) => ({
  height: props.$open ? 72 : 0,
  position: 'relative',
  overflow: 'hidden',
  transition: '.5s ease-out',
  fontSize: 'min(.85rem,16px)',
  borderTop: '1px solid #eee',
  marginTop: '-1px',
}));

export const StyleGroomAccount = styled.div(() => ({
  padding: '10px',
  lineHeight: '26px',
  letterSpacing: '0',
  textAlign: 'left',
  background: 'hsla(0,0%,100%,.75)',

  [`& > span > span`]: {
    marginRight: 10,
  },
}));

export const StyleCopyButton = styled.div(() => ({
  position: 'absolute',
  right: '10px',
  top: '15px',
  width: '60px',
  cursor: 'pointer',
  padding: '0 4px',
  fontSize: '12px',
  fontWeight: '600',
  lineHeight: '24px',
  borderRadius: '2px',
  background: '#f2efed',
  color: '#e56623',
}));
