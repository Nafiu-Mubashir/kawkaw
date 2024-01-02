import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SinglePageLayout } from '~/layouts/single-page-layout'

export default function Error() {
 
  return (
    <div>
      <div className='flex flex-col lg:flex-row justify-between items-center w-[90%] lg:w-[60%] m-auto mt-20'>
        <Image width={957} height={802} src="/404.png" alt="" className='w-[100%] lg:w-[50%]'/>
        <div>
          <h3 className='font-bold text-[70px] leading-[5rem]'>404<span className="text-mine"> ERROR!</span></h3>
          <div className='text-[14px] lg:text-[20px] w-[90%] lg:w-[95%]'>
            Sorry, we can't find the page you are looking for. Please go to <Link href={"/"} className='text-mine'>Home.</Link>
          </div>
        </div>
      </div>
    </div>
  )
}


Error.getLayout = function (page: React.ReactElement) {
  const bg = "/top-heading-course-new.webp"
  const event = bg
  return <SinglePageLayout image={event}>{page}</SinglePageLayout>
}