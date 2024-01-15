import React from 'react'
import { SinglePageLayout } from '~/layouts/single-page-layout'

const SingleCourse = () => {
  return (
    <div>SingleCourse</div>
  )
}

export default SingleCourse

SingleCourse.getLayout = function (page: React.ReactElement) {
  const event = "/courses/courses-banner.webp"
  return <SinglePageLayout image={event}>{page}</SinglePageLayout>
}