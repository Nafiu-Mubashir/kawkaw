import { ArrowRight2, Book1, BookSaved, Personalcard } from 'iconsax-react'

import React from 'react'

const CarouselCards = () => {
  const content:{
    icon: React.ReactNode,
    iconMobile: React.ReactNode,
    title: string
  }[] = [
    {
      icon: <Personalcard size="120" className='' color="#FFB606" />,
      iconMobile: <Personalcard size="60" className='' color="#FFB606" />,
      title: "Best Industry Leaders"
    },
    {
      icon: <BookSaved size="120" color="#FFB606" />,
      iconMobile: <BookSaved size="60" color="#FFB606" />,
      title: "Best Industry Leaders"
    },
    {
      icon: <Book1 size="120" color="#FFB606" />,
      iconMobile: <Book1 size="60" color="#FFB606" />,
      title: "Best Industry Leaders"
    }
  ]
  return (
    <div className='flex flex-col md:flex-row lg:flex-row gap-4 justify-between w-[95%] lg:w-[75%] m-auto'>
      {
        content.map(({ icon, title, iconMobile }, id) => (
          <div className='flex justify-betwen m-auto gap-4 bg-black lg:bg-black/60 hover:bg-black cursor-pointer transition duration-1000 ease-in-out transform p-4 lg:h-[150px] w-full lg:w-[400px]' key={id}>
            <div className='hidden lg:block'>
              {icon}
            </div>
            <div className='block lg:hidden'>
              {iconMobile}
            </div>
            <div className=''>
              <p className='text-white lg:text-[20px] font-bold lg:mt-4'>{title}</p>
              <button className='flex gap-3 items-center text-mine lg:mt-5'>view more <ArrowRight2 size="16" color="#FFB606" /></button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default CarouselCards