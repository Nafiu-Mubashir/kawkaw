import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'

import React from 'react'

const CustomButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
  const { carouselState: { currentSlide } } = rest;
  return (
    <div className='hidden md:block lg:block'>
      <div className='flex w-[100px] justify-between right-11 gap-4 absolute top-0 md:top[0px] lg:top-[60px]'>
        <button className={currentSlide === 0 ? 'disable' : 'border-2 p-2 hover:border-mine'} onClick={() => previous()}>
          <ArrowLeft2 color="#555555" />
        </button>
        <button className='border-2 p-2 hover:border-mine'>
          <ArrowRight2 color="#555555" onClick={() => next()} />
        </button>
      </div>
    </div>
  )
}

export default CustomButtonGroup