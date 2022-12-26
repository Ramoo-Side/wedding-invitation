import styled from 'styled-components';

export const StyleGalleryWrapper = styled.div(() => ({
  margin: '6.25rem auto',
  padding: '2.5rem 0px',
}));

export const StyleSlideWrapper = styled.div`
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
