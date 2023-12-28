import { Call, Diamonds, Facebook, Instagram, Location, MessageCircle } from 'iconsax-react'

import React from 'react'

export function Footer() {
  return (


    <footer className="bg-black text-white">
      <div className="p-4 lg:p-20">
        <div className="md:flex md:justify-between w-[95%] lg:w-[80%] m-auto">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex gap-2 items-center mb-4">
              <Diamonds color="#FFB606" variant="Linear" size={44} />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">KAWKAW</span>
            </a>
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
                <a href="/about" className="hover:underline hover:text-mine">About</a>
              </li>
              <li className='mb-4'>
                <a href="/blog" className="hover:underline hover:text-mine">Blog</a>
              </li>
              <li className='mb-4'>
                <a href="/contact" className="hover:underline hover:text-mine">Contact</a>
              </li>
              <li className='mb-4'>
                <a href="/" className="hover:underline hover:text-mine">Become a Teacher</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">Links</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="/courses" className="hover:underline hover:text-mine ">Courses</a>
              </li>
              <li className='mb-4'>
                <a href="/events" className="hover:underline hover:text-mine">Events</a>
              </li>
              <li className='mb-4'>
                <a href="/" className="hover:underline hover:text-mine">Gallery</a>
              </li>
              <li className='mb-4'>
                <a href="/faqs" className="hover:underline hover:text-mine">FAQs</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">Support</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline hover:text-mine">Documentation</a>
              </li>
              <li className='mb-4'>
                <a href="#" className="hover:underline hover:text-mine">Terms Conditions</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">Recommend</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline hover:text-mine">Online Class</a>
              </li>
              <li className='mb-4'>
                <a href="#" className="hover:underline hover:text-mine">Physical Class</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t-2 p-4 lg:p-8">
        <div className="w-[95%] lg:w-[80%] m-auto sm:flex sm:items-center sm:justify-between ">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">Kawkaw™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-mine">
              Privacy
            </a>
            <a href="#" className="text-gray-500 hover:text-mine ms-5">
              Terms
            </a>
            <a href="#" className="text-gray-500 hover:text-mine ms-5">
              Sitemap
            </a>
            <a href="#" className="text-gray-500 hover:text-mine ms-5">
              Purchase
            </a>
          </div>
        </div>
      </div>
    </footer>

  )
}