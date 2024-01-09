import Carousel from 'react-multi-carousel';
import CustomButtonGroup from './components/custom-button';
import CustomDot from './components/custom-dot';
import React from 'react'

const CustumizedCarousel = ({ children, classes, showButton = true}:{children: React.ReactNode, classes: string | undefined, showButton?: boolean}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={3000}
        centerMode={false}
        className={`w-full ${classes}`} 
        containerClass="container-padding-bottom"
        customButtonGroup={showButton ? <CustomButtonGroup /> : <div></div>}
        dotListClass=""
        focusOnSelect={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        partialVisible={false}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside
        renderDotsOutside={true}
        customDot={<CustomDot />}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {children}
      </Carousel>
      
    </div>
  )
}

export default CustumizedCarousel