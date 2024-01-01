import React, { useEffect, useState } from 'react'

import { ShoppingCart } from 'iconsax-react';

const BuyNowButton = () => {
 
  return (
    <button
      className={`fixed top-[350px]  text-sm right-0 p-2 shadow-md z-20 font-bold hover:bg-blac hover:text-whit bg-white text-black`}
    >
      <ShoppingCart color="black" className='block m-auto' />
      Buy Now
    </button>
  )
}

export default BuyNowButton