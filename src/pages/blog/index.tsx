import React from 'react'
import { SinglePageLayout } from '~/layouts/single-page-layout'

const Blog = () => {
  return (
    <div>Blog</div>
  )
}

export default Blog

Blog.getLayout = function (page: React.ReactElement) {
  const event = "/courses/courses-banner.webp"
  return <SinglePageLayout image={event}>{page}</SinglePageLayout>
}