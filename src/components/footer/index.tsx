import { Call, Facebook, HuobiToken, Instagram, Location, MessageCircle } from 'iconsax-react'

import Link from 'next/link'
import React from 'react'

export function Footer() {
  return (


    <footer className="bg-black text-white">
      <div className="p-4 lg:p-20">
        <div className="md:flex md:justify-between w-[95%] md:w-full flex-wrap lg:w-[80%] m-auto">
          <div className="mb-6 md:mb-0">
            <Link className="flex gap-2 items-center mb-4" href={''}>
              <HuobiToken color="#FFB606" variant="Linear" size={44} />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">KAWKAW</span>
            </Link>
            <div className='flex gap-2 items-center mb-4'>
              <Call size="20" color="#ffb606" />
              <p>08039187401</p>
            </div>
            <div className='flex gap-2 items-center mb-4'>
              <Location size="20" color="#ffb606" />
              <p>58 Howard Street #2 San Francisco</p>
            </div>
            <div className='flex gap-2 items-center mb-4'>
              <MessageCircle size="20" color="#ffb606" />
              <p> contact@kawkaw.com</p>
            </div>
            <div className='flex gap-2 items-center mb-4'>
              <Facebook size="32" color="white" className='hover:text-mine' />
              <Instagram size="32" color="white" className='hover:text-mine' />
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">Company</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="/Linkbout" className="hover:underline hover:text-mine">About</Link>
              </li>
              <li className='mb-4'>
                <Link href="/blog" className="hover:underline hover:text-mine">Blog</Link>
              </li>
              <li className='mb-4'>
                <Link href="/contact" className="hover:underline hover:text-mine">Contact</Link>
              </li>
              <li className='mb-4'>
                <Link className="hover:underline hover:text-mine" href={''}>Become a Teacher</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">Links</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="/courses" className="hover:underline hover:text-mine ">Courses</Link>
              </li>
              <li className='mb-4'>
                <Link href="/events" className="hover:underline hover:text-mine">Events</Link>
              </li>
              <li className='mb-4'>
                <Link className="hover:underline hover:text-mine" href={''}>Gallery</Link>
              </li>
              <li className='mb-4'>
                <Link href="/faqs" className="hover:underline hover:text-mine">FAQs</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">Support</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="#" className="hover:underline hover:text-mine">Documentation</Link>
              </li>
              <li className='mb-4'>
                <Link href="#" className="hover:underline hover:text-mine">Terms Conditions</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">Recommend</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="#" className="hover:underline hover:text-mine">Online Class</Link>
              </li>
              <li className='mb-4'>
                <Link href="#" className="hover:underline hover:text-mine">Physical Class</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t-2 p-4 lg:p-8">
        <div className="w-[95%] lg:w-[80%] m-auto sm:flex sm:items-center sm:justify-between ">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link className="hover:underline" href={''}>Kawkaw™</Link>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link href="#" className="text-gray-500 hover:text-mine">
              Privacy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-mine ms-5">
              Terms
            </Link>
            <Link href="#" className="text-gray-500 hover:text-mine ms-5">
              Sitemap
            </Link>
            <Link href="#" className="text-gray-500 hover:text-mine ms-5">
              Purchase
            </Link>
          </div>
        </div>
      </div>
    </footer>

  )
}