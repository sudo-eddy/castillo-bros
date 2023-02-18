import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import BrandBannerFirst from '../../assets/brands-1.png';
import BrandBannerSecond from '../../assets/brands-2.png';
import BrandBannerThird from '../../assets/brands-2.png';


const Carousel = () => {
  return (
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={BrandBannerFirst}
        alt='...'
      >
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={BrandBannerSecond}
        alt='...'
      >
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={BrandBannerThird}
        alt='...'
      >
      </MDBCarouselItem>
    </MDBCarousel>
  );
}

export default Carousel;