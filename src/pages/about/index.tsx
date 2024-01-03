import React from 'react'
import { SinglePageLayout } from '~/layouts/single-page-layout'

const About = () => {
  return (
    <div>About</div>
  )
}

export default About

About.getLayout = function (page: React.ReactElement) {
  const event = "/courses-banner.webp"
  return <SinglePageLayout image={event}>{page}</SinglePageLayout>
}