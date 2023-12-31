import Link from 'next/link'
import React from 'react'

const ViewMoreButton = ({classes, to}:{classes: string, to: string}) => {
  return (
    <Link href={to}>
      <button className={`bg-mine py-3 block m-auto uppercase px-8 font-bold ${classes}`}>View More</button>
    </Link>
  )
}

export default ViewMoreButton