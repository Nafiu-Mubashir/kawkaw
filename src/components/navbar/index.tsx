import { Call, Diamonds, Message, Profile2User } from "iconsax-react";
import React, { useEffect, useRef, useState } from 'react'

import { Dropdown } from "../dropdown";
import { Login } from "../login";
import { NavLink } from "../nav-link";
import { Registration } from "../registration";
import { Search } from "../search";
import { Sidebar } from "../sidebar";

export const Navabr = () => {
  const [toggles, setToggles] = useState(false)
  const [toggling, setToggling] = useState(false)
  const openCourse = () => {
    setToggles(!toggles)
  }

  const openEvent = () => {
    setToggling(!toggling)
  }

  const [isNavbarWhite, setIsNavbarWhite] = useState(false);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = navbarRef.current;

      if (navbar) {
        const scrollY = window.scrollY;

        console.log(navbar.getBoundingClientRect());

        if (scrollY > 10) {
          setIsNavbarWhite(true);
        } else {
          setIsNavbarWhite(false);
        }
      }
    };

    const obsv = new IntersectionObserver(() => {
      // Your intersection observer logic goes here
    });

    if (navbarRef.current) {
      obsv.observe(navbarRef.current);
    }

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
      obsv.disconnect();
    };
  }, []);

  return (
    <nav className={`main-na ${isNavbarWhite ? 'bg-white transition duration-600 delay-75 ease-in transform text-black fixed w-full z-10 top-0' : 'bg-transparent transition duration-500 delay-75 ease-out transform text-white sticky z-10 top-0'}`} ref={navbarRef}>
      <div className='bg-[#222222] w-full text-white p-2'>
        <div className='flex justify-between mx-auto w-full lg:w-[80%] px-2 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center gap-5'>
            <p className="hidden md:hidden lg:block">Contact us:</p>
            <p className="flex items-center gap-2">
              <Call size="20" color="white" />
              <span className="hidden md:hidden lg:block">
                (+88) 1990 6886
              </span>
            </p>
            <p className="flex items-center gap-2">
              <Message size="20" color="white" />
              <span className="hidden md:hidden lg:block">
                contact@thimpress.com
              </span>
            </p>
            <p className="flex items-center gap-2">
              <Profile2User size="20" color="white" />
              <span className="hidden md:hidden lg:block">
                Demo account
              </span>
            </p>
          </div>
          <div>
            <Registration /> | <Login />
          </div>
        </div>
      </div>
      <div className="mx-auto w-full lg:w-[80%] px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 gap-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex flex-1 gap-2 flex-shrink-0 items-center">
              <Diamonds color="#FFB606" variant="Linear" size={32} />
              {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" /> */}
              <span className="font-bold">KAWKAW</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden sm:ml-6 lg:block">
                <div className="flex items-center space-x-4">
                  <NavLink href={'/'} classNames={`${isNavbarWhite ? "text-black" : "text-white"}`}>Home</NavLink>
                  <NavLink href={'/about'} classNames={`${isNavbarWhite ? "text-black" : "text-white"}`}>About</NavLink>
                  <NavLink href={"/courses"} classNames={`${isNavbarWhite ? "text-black" : "text-white"}`}>
                    <Dropdown title={"Courses"} data={[{ name: "All courses", link: "/all-course" }, { name: "Single courses", link: "/all-course" }]}
                      open={openCourse}
                      toggle={toggles} color={`${isNavbarWhite ? "text-black" : "text-white"}`} fill={`${isNavbarWhite ? "black" : "white"}`} />
                  </NavLink>
                  <NavLink href={'/events'} classNames={`${isNavbarWhite ? "text-black" : "text-white"}`}>
                    <Dropdown title={"Events"} data={[{ name: "All events", link: "/events" }, { name: "Single events", link: "/all-course" }]}
                      open={openEvent}
                      toggle={toggling} color={`${isNavbarWhite ? "text-black" : "text-white"}`} fill={`${isNavbarWhite ? "black" : "white"}`} />
                  </NavLink>
                  <NavLink href={'/blog'} classNames={`${isNavbarWhite ? "text-black" : "text-white"}`}>Blog</NavLink>
                  <NavLink href={'/faqs'} classNames={`${isNavbarWhite ? "text-black" : "text-white"}`}>FAQs</NavLink>
                  <NavLink href={'/contact'} classNames={`${isNavbarWhite ? "text-black" : "text-white"}`}>Contact</NavLink>

                </div>
              </div>
              <Search colors={`${isNavbarWhite ? "black" : "white"}`} />
            </div>
            <div className="inset-y-0 left-0 flex items-center lg:hidden">
              <Sidebar colors={`${isNavbarWhite ? "black" : "white"}`} />
            </div>
          </div>
        </div>
      </div>



    </nav>

  )
}