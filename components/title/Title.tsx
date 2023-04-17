import { StyleImgWrapper, StyleName, StyleTitle, StyleTitleWrapper } from './Title.styled';

interface TitleProps {
  names: {
    groom: string;
    bride: string;
  };
}
const defaultTitleUrl = '/Record-to-Moment.png';
const Title = ({ names }: TitleProps) => {
  const { groom, bride } = names;
  return (
    <>
      <StyleTitleWrapper>
        <StyleTitle>
          <StyleImgWrapper>
            <img src={defaultTitleUrl} alt="record to moment" />
          </StyleImgWrapper>
          <StyleName>
            <span>{groom}</span>
            <span>{bride}</span>
          </StyleName>
        </StyleTitle>
      </StyleTitleWrapper>
    </>
  );
};

export default Title;
