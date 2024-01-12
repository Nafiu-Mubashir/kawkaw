import { Location, Profile, Timer1 } from 'iconsax-react'

import CustumizedCarousel from '~/components/carousel'
import Form from '~/components/form'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SinglePageLayout } from '~/layouts/single-page-layout'

const Contact = () => {
  const content = [
    {
      icon: <Location size="70" color="#4489F3" className='block m-auto mb-3' />,
      description: '1800 Abbot Kinney Blvd. Unit D & E Venice',
      title: 'Address way'
    },
    {
      icon: <Profile size="70" color="#81D170" className='block m-auto mb-3' />,
      description: (
        <>
          <p>Mobile: (+88) - 1990 - 6886</p>
          <p>Hotline: 1800 - 1102</p>
          <p>Mail: contact@eduma.com</p>
        </>
      ),
      title: 'Contact info'
    },
    {
      icon: <Timer1 size="70" color="#FFB606" className='block m-auto mb-3' />,
      description: (
        <>
          <p>Monday - Friday: 09:00 - 20:00</p>
          <p>Sunday & Saturday: 10:30 - 22:00</p>
        </>
      ),
      title: 'Work timer'
    },
  ]
  return (
    <div className='w-full lg:w-[80%] m-auto'>
      <div className='flex flex-col md:flex-row lg:flex-row justify-evenly gap-3 m-auto p-3 text-center mt-5 lg:mt-10 mb-4'>
        {
          content.map(({ icon, description, title }, id) => (
            <div className={` bg-white rounded-md shadow-md p-4 w-full lg:w-[350px] h-[250px] md:h-[300px] hover:border-b-4 first:hover:border-b-[#4489F3] last:hover:border-b-mine hover:even:border-b-[#81D170] cursor-pointer`} key={id}>
              <div className="mt-6">
                {icon}
                <div>
                  <p className='font-bold'>{title}</p>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <div className='mb-4 p-3'>
        <h3 className='font-bold text-center text-[18px] lg:w-[40%] m-auto mb-3'>Fill the form below so we can get to know you and your needs better.</h3>
        <div>
          <Form classes={'m-auto '} btn={'block m-auto '} />
        </div>
      </div>

      <div className='mt-5 mb-3 p-3'>
        <iframe width="100%" height="600" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=bank%20of%20industry,%20Abuja,%20Nigeria+(KAWKAW)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          <Link href="https://www.maps.ie/population/">Population mapping</Link>
        </iframe>
      </div>

      {/* <CustumizedCarousel classes={undefined}> 
      <Image src={'/contact-logos/banner1.webp'} width={145} height={45} alt='' />
        <Image src={'/contact-logos/banner1.webp'} width={145} height={45} alt='' />
      
      </CustumizedCarousel> */}
    </div>
  )
}

export default Contact

Contact.getLayout = function (page: React.ReactElement) {
  const event = "/courses/courses-banner.webp"
  return <SinglePageLayout image={event}>{page}</SinglePageLayout>
}