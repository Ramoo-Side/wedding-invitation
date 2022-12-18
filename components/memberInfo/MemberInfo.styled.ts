import styled from 'styled-components';

export const StyleMemberInfoWrapper = styled.div(() => ({
  lineHeight: 2,
  width: `25rem`,
  margin: `2.5rem auto`,
}));

export const StyleGroomWrapper = styled.div(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

export const StyleGroomParents = styled.div(() => ({
  fontSize: `1.375rem`,
  letterSpacing: `0.3125rem`,
  color: '#333333',
  fontWeight: 500,
}));

export const StyleGroomMiddle = styled.div(() => ({
  fontWeight: 'bold',
  color: 'rgb(138, 133, 127)',
  display: 'flex',
  alignItems: 'center',
  letterSpacing: '3px',
  justifyContent: 'space-around',
  width: '100px',
}));

export const StyleGroomMiddleSpan = styled.span(() => ({
  display: 'inline-block',
  minWidth: '2rem',
  textAlign: 'center',
}));

export const StyleGroomName = styled.div(() => ({
  fontSize: `1.375rem`,
  letterSpacing: `0.3125rem`,
  color: '#333333',
}));

export const StyleCallWrapper = styled.div(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const StyleCallIcon = styled.img(() => ({
  width: `1.375rem`,
  marginLeft: 15,
  cursor: 'pointer',
}));

//*******************************************************************/

export const StyleBrideWrapper = styled(StyleGroomWrapper)``;
export const StyleBrideParents = styled(StyleGroomParents)``;
export const StyleBrideMiddle = styled(StyleGroomMiddle)``;
export const StyleBrideMiddleSpan = styled(StyleGroomMiddleSpan)``;
export const StyleBrideName = styled(StyleGroomName)``;
