import React from 'react'
import { SinglePageLayout } from '~/layouts/single-page-layout'
import { Tabs } from '@mantine/core';

export default function Events() {

  return (
    <div>
      Events
      <Tabs defaultValue="first" color='#FFB606' className='w-[80%] m-auto mb-5'>
        <Tabs.List grow justify="center">
          <Tabs.Tab value="first">First tab</Tabs.Tab>
          <Tabs.Tab value="second">Second tab</Tabs.Tab>
          <Tabs.Tab value="third">Third tab</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="first">Gallery tab content</Tabs.Panel>
        <Tabs.Panel value="second">Messages tab content</Tabs.Panel>
        <Tabs.Panel value="third">Settings tab content</Tabs.Panel>
      </Tabs>

      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, est, sunt dicta suscipit repudiandae quam assumenda fuga provident accusantium veritatis quibusdam illo iure alias cupiditate temporibus optio et dolore voluptate?
    </div>
  )
}


Events.getLayout = function (page: React.ReactElement) {
  const event = "/Event-cover-banner-18.webp"
  return <SinglePageLayout image={event}>{page}</SinglePageLayout>
}