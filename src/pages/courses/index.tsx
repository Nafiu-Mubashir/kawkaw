import { Category, Element3, Firstline, Task } from 'iconsax-react';
import React, { ChangeEvent, useEffect, useState } from 'react'

import CourseCard from '~/components/cards/courses-card/courses-page'
import CoursesCard from '~/components/cards/courses-card/home-page';
import { RootState } from '~/lib/store';
import { SinglePageLayout } from '~/layouts/single-page-layout'
import { useSelector } from 'react-redux';

interface FilterOptions {
  categories: { name: string; count: number }[];
  prices: { name: string; count: number }[];
  authur: { name: string; count: number }[]
}

export default function Courses() {
  const courses = useSelector((state: RootState) => state.course.course);
  // const [grid, setGrid] = useState(false);
  const [grid, setGrid] = useState<boolean>(() => {
    if (typeof localStorage !== 'undefined') {
      const showBanner = localStorage.getItem('showBanner');
      // If showBanner is null/undefined, fallback to true
      return showBanner ? JSON.parse(showBanner) : true;
    } else {
      // Handle the case where localStorage is not available (e.g., server-side rendering)
      return true;
    }
  });

  useEffect(() => {
    localStorage.setItem('showBanner', JSON.stringify(grid));
  }, [grid]);

  const displayGrid = () => {
    setGrid(true);
  };

  const displayRow = () => {
    setGrid(false);
  };

  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    categories: [],
    prices: [],
    authur: []
  });

  useEffect(() => {
    const categoryCounts: Record<string, number> = {};
    const priceCounts: Record<string, number> = {};
    const authorsCounts: Record<string, number> = {};

    courses.forEach(course => {
      // Count categories
      const category = course.category;
      categoryCounts[category] = (categoryCounts[category] || 0) + 1;

      // Count prices
      const price = course.price;
      priceCounts[price] = (priceCounts[price] || 0) + 1;

      const authur = course.authur;
      authorsCounts[authur] = (authorsCounts[authur] || 0) + 1;
    });

    // Convert category counts to array
    const categoryOptions = Object.keys(categoryCounts).map(name => ({
      name,
      count: categoryCounts[name],
    }));

    // Convert price counts to array
    const priceOptions = Object.keys(priceCounts).map(name => ({
      name,
      count: priceCounts[name],
    }));

    const authorOptions = Object.keys(authorsCounts).map(name => ({
      name,
      count: authorsCounts[name]
    }))

    setFilterOptions({ categories: categoryOptions, prices: priceOptions, authur: authorOptions });
  }, [courses]);

  // const uniqueCategories = Array.from(new Set(courses.map(course => course.category)));
  // console.log(uniqueCategories);

  return (
    <div>
      <div className='grid grid-row md:grid-row lg:grid-cols-4 gap-3 mt-5 w-full md:w-[95%] lg:w-[80%] m-auto p-2 overflow-hidden'>
        <div className='col-span-3'>
          <div className='p-2 bg-gray-100 mb-4 flex justify-between items-center'>
            <div className='flex gap-4 items-center'>
              <div className='flex gap-2'>
                <Element3 size="24" color={grid ? "orange" : "gray"} variant='Bold' onClick={displayGrid} className='hover:cursor-pointer' />
                <Task size="24" color={!grid ? "orange" : "gray"} variant='Bold' onClick={displayRow}  className='hover:cursor-pointer'/>
                {/* <Firstline size="32" color="gray" /> */}
              </div>
              <p className='hidden lg:block'>Showing 1-12 of 19 results</p>
            </div>

            <div className='flex justify-between flex-wrap md:flex-nowrap lg:flex-nowrap gap-4'>
              <select id="countries" value={''} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-mine focus:border-mine block lg:w-full p-2">
                <option selected disabled>Newly Published</option>
                <option value="alphabetical">Alphabetical</option>
                <option value="members">Number of Members</option>
              </select>

              <div className="relative w-full">
                <input type="text" id="voice-search" value={''} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-mine focus:border-mine block w-full ps-2 p-2" placeholder="Search our course" required />
                <button type="button" className="absolute inset-y-0 end-0 flex items-center text-gray-300 mt-1">
                  <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {
          grid === false ?
            courses.map(({ authur, title, price, image, description, members, amount }, ind) => (
              <CourseCard authur={authur} title={title} price={price} image={image} description={description} key={ind} members={members} amount={amount} />
            ))

            :
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {
                courses.map(({ authur, title, price, image, members, amount }, ind) => (
                  <CoursesCard authur={authur} title={title} price={price} image={image} key={ind} members={members} classes='lg:w-[250px' amount={amount} />
                ))}
            </div>

          }
        </div>
        <div className='border col-span-3 lg:col-span-1 p-3 w-full'>
          <div className='mb-3'>
            <h3 className='p-2 font-bold mb-3'>Categories</h3>
            <label>
              {filterOptions.categories.sort((a: { name: string; }, b: { name: string; }) => a.name.localeCompare(b.name)).map(({ name, count }) => (
                <div key={name} className='flex justify-between'>
                  <label className='font-medium text-gray-900 capitalize flex gap-2 items-center mb-2'>
                    <input
                      type="checkbox"
                      value={name}
                      // checked={}
                      // onChange={handleCategoryFilterChange}
                      className='w-4 h-4 text-white border-gray-100'
                    />
                    {name}
                  </label>
                  <p>{count}</p>
                </div>
              ))}
            </label>
          </div>

          <div className='mb-3'>
            <h3 className='p-2 font-bold mb-3'>Authur</h3>
            <label>
              {filterOptions.authur.map(({ name, count }) => (
                <div key={name} className='flex justify-between'>
                  <label className='font-medium text-gray-900 capitalize flex gap-2 items-center mb-2'>
                    <input
                      type="checkbox"
                      value={name}
                      // checked={}
                      // onChange={handleCategoryFilterChange}
                      className='w-4 h-4 text-white border-gray-100'
                    />
                    {name}
                  </label>
                  <p>{count}</p>
                </div>
              ))}
            </label>
          </div>

          <div className='mb-3'>
            <h3 className='p-2 font-bold mb-3'>Price</h3>
            <label>
              {filterOptions.prices.map(({ name, count }) => (
                <div key={name} className='flex justify-between'>
                  <label className='font-medium text-gray-900 capitalize flex gap-2 items-center mb-2'>
                    <input
                      type="checkbox"
                      value={name}
                      // checked={}
                      // onChange={handleCategoryFilterChange}
                      className='w-4 h-4 text-white border-gray-100'
                    />
                    {name}
                  </label>
                  <p>{count}</p>
                </div>
              ))}
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}


Courses.getLayout = function (page: React.ReactElement) {
  const event = "/courses/courses-banner.webp"
  return <SinglePageLayout image={event}>{page}</SinglePageLayout>
}