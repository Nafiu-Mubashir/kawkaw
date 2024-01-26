import { Flag, Location, Timer1 } from 'iconsax-react';

import Countdown from '~/components/countdown';
import MoreButton from '~/components/more-button';
import React from 'react'
import { RootState } from '~/lib/store';
import { SinglePageLayout } from '~/layouts/single-page-layout'
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

export const SingleEvent = () => {
  const router = useRouter();
  const { single_event } = router.query;
  const events = useSelector((state: RootState) => state.events.events);
  const single = events.find((val) => val.title === single_event);
  console.log(single);
  const image = single?.image


  return (
    <div>
      <div className='w-full lg:w-[80%] m-auto p-3 lg:p-8 flex flex-col md:flex-row lg:flex-row justify-between'>
        <div className='w-full md:w-[70%] lg:w-[75%]'>
          <h3 className='font-bold mb-3'>{single?.title}</h3>
          <div
            style={{
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${image}') no-repeat`,
              // backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
            className='h-[50vh] w-full p-3 '
          >
            <div className='w-[70%] m-auto mt-[6rem] lg:mt-32'>
              <Countdown />
            </div>
          </div>

          <div className='flex flex-col lg:flex-row justify-between mt-10'>
            <div className='w-full lg:w-[50%]'>
              <h3 className='mb-4 font-bold'>EVENT DESCRIPTION</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </p>


              <h3 className='font-bold mb-4 mt-5'>EVENT CONTENT</h3>
              <ul className='ml-4 list-disc mb-4 marker:text-mine text-[14px] space-y-2'>
                <li className=''>Over 37 lectures and 55.5 hours of content!</li>
                <li>LIVE PROJECT End to End Software Testing Training Included.</li>
                <li>Learn Software Testing and Automation basics from a professional trainer from your own desk.</li>
                <li>Information packed practical training starting from basics to advanced testing techniques.</li>
                <li>Best suitable for beginners to advanced level users and who learn faster when demonstrated.</li>
                <li>Course content designed by considering current software testing technology and the job market.</li>
                <li>Practical assignments at the end of every session.</li>
                <li>Practical learning experience with live project work and examples.</li>
              </ul>

              <div>
                <h3 className='font-bold'>Leave A Reply</h3>
                <p>You must be logged in to post a comment.</p>
              </div>
            </div>

            <div className='w-full lg:w-[30%]'>
              <div className='mb-5 border-b p-3'>
                <p className='flex gap-3'>
                  <Timer1 size="20" color="#FFB606" />
                  <span className='font-bold'>Start Time</span>
                </p>
                <div className='w-[90%] ml-auto'>
                  <p>{single?.time.from}</p>
                <p>{single?.date.day}, {single?.date.month}</p>
                </div>
              </div>
              <div className='mb-5 border-b p-3'>
                <p className='flex gap-3'>
                  <Flag size="20" color="#FFB606" variant="Bold" />
                  <span className='font-bold'>Finish Time</span>
                </p>
               <div className='w-[90%] ml-auto'>
                 <p>{single?.time.to}</p>
                <p>{single?.date.day}, {single?.date.month}</p>
               </div>
              </div>
              <div className='mb-5 border-b p-3'>
                <p className='flex gap-3'>
                  <Location size="20" color="#FFB606" />
                  <span className='font-bold'>Address</span>
                </p>
                <p className='w-[90%] ml-auto'>{single?.location}</p>
              </div>
            </div>
          </div>
        </div>

        <div className='shadow-md fied righ-40 w-full md:w-[25%] lg:w-[20%] h-[500px]'>
          <div className='bg-mine p-3 text-center font-bold'>
            <h3>Buy ticket</h3>
          </div>
          <div className='p-4'>
            <div className='flex gap-3 justify-between p-3 border-b mb-4'>
              <p>Total Slots</p>
              <p>100</p>
            </div>
            <div className='flex gap-3 justify-between p-3 border-b mb-4'>
              <p>Booked Slots</p>
              <p>0</p>
            </div>
            <div className='flex gap-3 justify-between p-3 border-b mb-4'>
              <p>Cost</p>
              <p>0</p>
            </div>
            <div className='flex gap-3 justify-between p-3 border-b mb-4'>
              <p>Quantity</p>
              <p>0</p>
            </div>
            <div className='flex gap-3 justify-between p-3 border-b mb-4'>
              <p>pay with</p>
              <p>0</p>
            </div>
            <div>
              <MoreButton classes={'disabled'} to={''} label={'Expired'} />
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default SingleEvent

SingleEvent.getLayout = function (page: React.ReactElement) {
  const event = "/Event-cover-banner-18.webp"
  return <SinglePageLayout image={event}>{page}</SinglePageLayout>
}