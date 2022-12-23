import styled from 'styled-components';

export const StyleMap = styled.div(() => ({
  width: `100%`,
  height: `25rem`,
  margin: `auto`,
}));

export const StyleTitleWrapper = styled.div(() => ({
  marginBottom: `1.25rem`,
}));

export const StyleTitle = styled.div(() => ({
  fontSize: '1.625rem',
  color: '#f1965f',
  fontWeight: 'bold',
  letterSpacing: '0.3125rem',
  marginBottom: `1.875rem`,
}));

export const StyleLocationTitle = styled.div(() => ({
  fontSize: '1.375rem',
  color: '#333',
  letterSpacing: '0.3125rem',
  marginBottom: `1.25rem`,
}));

export const StyleLocation = styled.div(() => ({
  fontSize: '1.125rem',
  color: '#595959',
  letterSpacing: '0.3125rem',
  marginBottom: `1.25rem`,
}));

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
