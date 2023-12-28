import { ArrowRight2 } from 'iconsax-react';
import { Navabr } from '~/components/navbar';
import React from 'react'
import { useRouter } from 'next/router';

export function SinglePageLayout({ image, children }: { image?: string, children: React.ReactNode }) {
  const fallBackImg = '/top-heading-course-new.webp';
  const { asPath } = useRouter();

  const path = asPath.replace(/[#\?.*$]/g, "").split('/').filter(el => el);

  return (
    <div>
      <div style={{
        backgroundImage: `url('${image ?? fallBackImg}')`,
      }}
        className='h-[35vh] bg-cover bg-center bg-black opacity-[5]'
      >
        <Navabr />
        <div className='p-5 lg:mt-10'>
          <p className='text-white font-bold uppercase text-[30px] lg:text-[40px] w-[80%] m-auto border-l-4 border-mine p-1'>
            {path.map((el => <span key={el}>{el}</span>))}
          </p>
        </div>
      </div>
      <div className='w-[90%] lg:w-[70%] m-auto flex items-center gap-2 border-b p-3 text-md'>
        Home <ArrowRight2 size="13" color="#222222" className='mt-1' /> {path.map((el => <span key={el}>{el}</span>))}
      </div>
      {children}
    </div>
  )
}
