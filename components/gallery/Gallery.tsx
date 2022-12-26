import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { StyleGalleryWrapper, StyleSlideWrapper } from './Gallery.styled';

const imgList = [
  {
    url: `test/brideAndGroom/bride-and-groom1.jpg`,
  },
  {
    url: `test/brideAndGroom/bride-and-groom2.jpg`,
  },
  {
    url: `test/brideAndGroom/bride-and-groom3.jpg`,
  },
  {
    url: `test/brideAndGroom/bride-and-groom4.jpg`,
  },
  {
    url: `test/brideAndGroom/bride-and-groom5.jpg`,
  },
  {
    url: `test/brideAndGroom/bride-and-groom6.jpg`,
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
            src={`test/brideAndGroom/bride-and-groom${idx + 1}.jpg`}
            style={{ height: 50, width: 50 }}
          />
        </a>
      );
    },
  };

  return (
    <StyleGalleryWrapper>
      <StyleSlideWrapper>
        <Slider {...settings}>
          {imgList.map((ele) => (
            <div key={ele.url}>
              <img src={ele.url} alt="test" />
            </div>
          ))}
        </Slider>
      </StyleSlideWrapper>
    </StyleGalleryWrapper>
  );
}

export default Gallery;
