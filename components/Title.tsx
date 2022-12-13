import { StyleImgWrapper, StyleName, StyleTitle } from './Title.styled';

interface TitleProps {
  names: string[];
}

const Title = ({ names }: TitleProps) => {
  const defaultTitleUrl = '/Record-to-Moment.png';
  return (
    <>
      <StyleTitle>
        <StyleImgWrapper>
          <img src={defaultTitleUrl} alt="record to moment" />
        </StyleImgWrapper>
        <StyleName>
          <span>{names[0]}</span>
          <span>{names[1]}</span>
        </StyleName>
      </StyleTitle>
    </>
  );
};

export default Title;
