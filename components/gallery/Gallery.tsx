import styled from 'styled-components';
import Slider from 'react-slick';

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

function Gallery() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    customPaging: function (idx: number) {
      return (
        <a>
          <img
            src={`brideAndGroom/bride-and-groom${idx + 1}.jpg`}
            style={{ height: 50, width: 50 }}
          />
        </a>
      );
    },
  };

  return (
    <StyleSlideWrapper>
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
      height: 400px;
      width: 100%;
      box-sizing: border-box;
    }
  }
  .slick-slider {
    .slick-arrow {
      display: none;
    }
  }
  .slick-dots {
    bottom: -3.75rem;
    li {
      margin: 0 1.25rem;
    }
  }
`;
