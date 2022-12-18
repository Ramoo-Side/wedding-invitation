import { useMemo } from 'react';
import styled from 'styled-components';
import Slider, { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const imgList = [
  {
    url: `brideAndGroom/bride-and-groom1.jpg`,
  },
  {
    url: `brideAndGroom/bride-and-groom2.jpg`,
  },
  {
    url: `brideAndGroom/bride-and-groom3.jpg`,
  },
  {
    url: `brideAndGroom/bride-and-groom4.jpg`,
  },
  {
    url: `brideAndGroom/bride-and-groom5.jpg`,
  },
  {
    url: `brideAndGroom/bride-and-groom6.jpg`,
  },
];

interface sliderProps {
  /** 커스텀 클래스 */
  className?: string;
  /** 자동재생 (속도 설정시 number 타입으로) */
  autoplay?: boolean | number;
  /** 슬라이더 속도 */
  speed?: number;
  /** 반복 여부 */
  loop?: boolean;
}

function Gallery({ className, autoplay = true, speed = 300, loop = true }: sliderProps) {
  const settings = useMemo<Settings>(
    () => ({
      dots: true,
      fade: true,
      infinite: loop,
      speed: speed,
      slidesToShow: 1,
      autoplay: Boolean(autoplay),
      autoplaySpeed: typeof autoplay === 'boolean' ? 3000 : autoplay,
      // customPaging: function (i) {
      //   return (
      //     <a>
      //       <img
      //         src={`brideAndGroom/bride-and-groom${i + 1}.jpg`}
      //         style={{ height: 50, width: 50 }}
      //       />
      //     </a>
      //   );
      // },
    }),
    [autoplay, loop, speed]
  );
  return (
    <StyleSlideWrapper className={className}>
      <Slider {...settings}>
        {imgList.map((ele) => (
          <div key={ele.url}>
            <img src={ele.url} alt="test" />
          </div>
        ))}
      </Slider>
    </StyleSlideWrapper>
  );
}

export default Gallery;

const StyleSlideWrapper = styled.div`
  .slick-slide {
    img {
      object-fit: cover;
      height: 500px;
      width: 100%;
      box-sizing: border-box;
    }
  }
`;
