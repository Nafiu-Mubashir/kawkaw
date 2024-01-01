import EventsCard from '~/components/cards/events-card';
import React from 'react'
import { RootState } from '~/lib/store';
import { SinglePageLayout } from '~/layouts/single-page-layout'
import { Tabs } from '@mantine/core';
import { useSelector } from 'react-redux';

export default function Events() {

  const events = useSelector((state: RootState) => state.events.events)
  return (
    <div>
      <Tabs defaultValue="happening" color='#FFB606' className='w-[80%] m-auto mb-5 mt-10'>
        <Tabs.List grow justify="center">
          <Tabs.Tab value="happening">Happening</Tabs.Tab>
          <Tabs.Tab value="upcoming">Upcoming</Tabs.Tab>
          <Tabs.Tab value="expired">Expired</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="happening" className='mt-10'>
          {
            events.filter((val) => val.category === 'happening').map(({ image, title, date, time, location, category, content, }, index) => (

              <EventsCard date={date} time={time} title={title} location={location} content={content} image={image} key={index} id={title} />
            ))
          }
        </Tabs.Panel>
        <Tabs.Panel value="upcoming" className='mt-10'>
          {
            events.filter((val) => val.category === 'upcoming').map(({ image, title, date, time, location, category, content, }, index) => (

              <EventsCard date={date} time={time} title={title} location={location} content={content} image={image} key={index} id={title}/>
            ))
          }
        </Tabs.Panel>
        <Tabs.Panel value="expired" className='mt-10'>
          {
            events.filter((val) => val.category === 'expired').map(({ image, title, date, time, location, category, content, }, index) => (

              <EventsCard date={date} time={time} title={title} location={location} content={content} image={image} key={index} id={title}/>
            ))
          }
        </Tabs.Panel>
      </Tabs>
    </div>
  )
}


Events.getLayout = function (page: React.ReactElement) {
  const event = "/Event-cover-banner-18.webp"
  return <SinglePageLayout image={event}>{page}</SinglePageLayout>
}