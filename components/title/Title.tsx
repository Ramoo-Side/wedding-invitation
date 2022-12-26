import { StyleImgWrapper, StyleName, StyleTitle, StyleTitleWrapper } from './Title.styled';

interface TitleProps {
  names: string[];
}

const Title = ({ names }: TitleProps) => {
  const defaultTitleUrl = '/Record-to-Moment.png';
  return (
    <>
      <StyleTitleWrapper>
        <StyleTitle>
          <StyleImgWrapper>
            <img src={defaultTitleUrl} alt="record to moment" />
          </StyleImgWrapper>
          <StyleName>
            <span>{names[0]}</span>
            <span>{names[1]}</span>
          </StyleName>
        </StyleTitle>
      </StyleTitleWrapper>
    </>
  );
};

export default Title;
