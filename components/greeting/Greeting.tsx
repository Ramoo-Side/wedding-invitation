import {
  StyleFlowerImg,
  StyleGreeting,
  StyleHighlightText,
  StyleInviteContents,
  StyleInviteTitle,
  StyleInviteWrapper,
  StylePoetry,
} from './Greeting.styled';

const Greeting = () => {
  return (
    <>
      <StyleGreeting>
        <StyleFlowerImg src="test/flower/flower5.png" alt="flower" />
        <StylePoetry>
          두 사람이 꽃과 나무처럼 걸어와서
          <br />
          서로의 모든 것이 되기 위해
          <br />
          오랜 기다림 끝에 혼례식을 치르는 날
          <br />
          세상은 더욱 아름다워라
          <br />
          <br />
          이해인, &lt;사랑의 사람들이여&gt;
        </StylePoetry>
        <StyleInviteWrapper>
          <StyleInviteTitle>초대합니다</StyleInviteTitle>
          <br />
          <StyleInviteContents>
            <div>
              살랑이는 바람결에
              <br />
              사랑이 묻어나는 계절입니다.
              <br />
              여기 곱고 예쁜 두 사람이
              <span>
                <StyleHighlightText>사랑</StyleHighlightText>
              </span>
              을 맺어
              <br />
              인생의 반려자가 되려 합니다.
              <br />
              새 인생을 시작하는 이 자리에 오셔서
              <br />
              <span>
                <StyleHighlightText>축복</StyleHighlightText>
              </span>
              해 주시면 감사하겠습니다.
            </div>
          </StyleInviteContents>
        </StyleInviteWrapper>
      </StyleGreeting>
    </>
  );
};

export default Greeting;
