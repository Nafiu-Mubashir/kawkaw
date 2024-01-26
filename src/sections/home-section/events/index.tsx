import EventsCard from '~/components/cards/events-card'
import MoreButton from '~/components/more-button'
import React from 'react'
import { RootState } from '~/lib/store'
import { useSelector } from 'react-redux'

const Events = () => {
  const events = useSelector((state: RootState) => state.events.events)
  return (
    <div className='p-3 lg:p-8'>
      <div className='w-full lg:w-[80%] m-auto'>
        <div className='flex flex-col md:flex-row lg:flex-row justify-between item-center mb-5'>
          <div>
            <h3 className='font-bold text-[30px]'>Events</h3>
            <p className='text-gray-400'>Upcoming Education Events to feed your brain.</p>
          </div>
          <MoreButton classes='bg-white border border-gray-200 hover:border-mine ml-0 mt-5 lg:mt-2' label='View All' to='/events' />
        </div>
        <div>
          {
            events.filter((val) => val.home === 'home' ).map(({ image, title, date, time, location, category, content, }, id) => (
              
              <EventsCard date={date} time={time} title={title} location={location} content={content} image={image} key={id} id={title} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Events