import { Airdrop, Cup, KeyboardOpen, WifiSquare } from 'iconsax-react'
import React, { useEffect, useState } from 'react'

import { SinglePageLayout } from '~/layouts/single-page-layout'
import Team from '~/about-sections/team'
import WhyChooseUs from '~/about-sections/what-make-us'

const About = () => {
  const content = [
    {
      icon: <WifiSquare size="70" color="#81D170"  className='block m-auto mb-3'/>,
      total: 94532,
      title: 'Foreign Followers'
    },
    {
      icon: <KeyboardOpen size="70" color="#4489F3" className='block m-auto mb-3' />,
      total: 11223,
      title: 'Classes Complete'
    },
    {
      icon: <Airdrop size="70" color="#FFB606" className='block m-auto mb-3' />,
      total: 25678,
      title: 'Students Enrolled'
    },
    {
      icon: <Cup size="70" color="#ED7459" className='block m-auto mb-3' />,
      total: 2678,
      title: 'Certified Teachers'
    },
  ]

  return (
    <div>
      <div className=' w-full lg:w-[80%] m-auto'>
        <div className='lg:w-[50%] m-auto p-3 mt-4'>
          <h3 className='text-center font-bold'>Learn with passion to live with purpose.</h3>
          <p className='text-center text-gray-400 text-[13px] lg:text-[14px] mt-1'>Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt egetnvallis a cras semper auctonvallis a cras semper aucto.</p>
        </div>
        <div className='flex flex-col md:flex-row lg:flex-row justify-evenly gap-3 m-auto p-3 text-center'>
          {
            content.map(({ icon, total, title }, id) => (
              <div className={`about bg-white rounded-md shadow-md p-4 w-full lg:w-[250px] h-[250px] md:first:mt-10 lg:first:mt-10 md:last:mt-10  lg:last:mt-10 hover:border-b-4 first:hover:border-b-[#81D170] last:hover:border-b-[#ED7459] first:text-[#81D170] last:text-[#ED7459] second:text-blue-500 cursor-pointer`} key={id}>
                <div className="mt-6">
                  {icon}
                  <div>
                    <p>{total}</p>
                    <p className='text-black'>{title}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <WhyChooseUs />
      <Team />
      
    </div>
  )
}

export default About

About.getLayout = function (page: React.ReactElement) {
  const event = "/courses/courses-banner.webp"
  return <SinglePageLayout image={event}>{page}</SinglePageLayout>
}