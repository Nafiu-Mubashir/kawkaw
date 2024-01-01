import Link from 'next/link'
import React from 'react'

const MoreButton = ({classes, to, label}:{classes: string, to: string, label: string}) => {
  return (
    <Link href={to}>
      <button className={`bg-mine py-3 block m-auto uppercase px-8 font-bold ${classes}`}>{label}</button>
    </Link>
  )
}

export default MoreButton