import React from 'react'
import { SinglePageLayout } from '~/layouts/single-page-layout'

export default function Courses() {
  return (
    <div>
      Courses
    </div>
  )
}


Courses.getLayout = function (page: React.ReactElement) {
  const event = "/courses-banner.webp"
  return <SinglePageLayout image={event}>{page}</SinglePageLayout>
}