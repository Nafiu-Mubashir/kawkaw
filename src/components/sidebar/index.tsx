import { Button, Drawer } from '@mantine/core';

import { HambergerMenu } from 'iconsax-react';
import { NavLink } from '../nav-link';
import { useDisclosure } from '@mantine/hooks';

export function Sidebar({ colors }: { colors: string }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        size='90%'
        title='Authentication'
        className='lg:hidden'>
        <div className='sm:block' id='mobile-menu'>
          <div className='space-y-1 px-2 pb-3 pt-2'>
            <NavLink href={'/'} classNames={'text-black'}>
              Home
            </NavLink>
            <NavLink href={'/about'} classNames={'text-black'}>
              About
            </NavLink>
            <NavLink href={'/courses'} classNames={'text-black'}>
              Courses
            </NavLink>
            <NavLink href={'/events'} classNames={'text-black'}>
              Events
            </NavLink>
            {/* <NavLink href={'/blog'} classNames={'text-black'}>
              Blog
            </NavLink> */}
            <NavLink href={'/faqs'} classNames={'text-black'}>
              FAQs
            </NavLink>
            <NavLink href={'/contact'} classNames={'text-black'}>
              Contact
            </NavLink>
          </div>
        </div>
      </Drawer>

      <button
        onClick={open}
        className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
        <HambergerMenu size='20' color={colors} />
      </button>
    </>
  );
}
