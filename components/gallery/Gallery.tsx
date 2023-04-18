import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { StyleGalleryWrapper, StyleSlideWrapper } from './Gallery.styled';

const imgList = [
  {
    url: `https://picsum.photos/500/500?random=1`,
  },
  {
    url: `https://picsum.photos/500/500?random=2`,
  },
  {
    url: `https://picsum.photos/500/500?random=3`,
  },
  {
    url: `https://picsum.photos/500/500?random=4`,
  },
  {
    url: `https://picsum.photos/500/500?random=5`,
  },
  {
    url: `https://picsum.photos/500/500?random=6`,
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
            src={`https://picsum.photos/500/500?random=${idx + 1}`}
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
