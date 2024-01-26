import { Category, Element3, Firstline, Task } from 'iconsax-react';
import React, { ChangeEvent, useEffect, useMemo, useState } from 'react'

import CourseCard from '~/components/cards/courses-card/courses-page'
import CoursesCard from '~/components/cards/courses-card/home-page';
import { RootState } from '~/lib/store';
import { SinglePageLayout } from '~/layouts/single-page-layout'
import debounce from 'lodash/debounce'
import { useDataControl } from '~/hooks';
import { useSelector } from 'react-redux';

interface FilterOptions {
  categories: { name: string; count: number }[];
  prices: { name: string; count: number }[];
  authur: { name: string; count: number }[]
}

export default function Courses() {
  const courses = useSelector((state: RootState) => state.course.course);

  const [dataControl, setDataControl] = useDataControl();
  const [inAppSearch, setInAppSearch] = useState("");

  const { prices, authors, categories, dataOrientation, page, page_size, search } = dataControl



  const setDebouncedSearch = (search: string) => debounce(() => setDataControl({ search: !search ? undefined : search }), 750)

  const handleTextSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInAppSearch(event.target.value)
    setDebouncedSearch(event.target.value)
  }

  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>, key: keyof typeof dataControl, value: unknown) => {
    const { checked } = event.currentTarget;

    if (checked) {
      setDataControl({ [key]: [...dataControl[key] as unknown[], value] })
    } else {
      // @ts-expect-error
      const filtered = dataControl[key].filter((el: unknown) => el !== value)

      setDataControl({ [key]: filtered })
    }

  }

  const displayGrid = () => {
    setDataControl({
      dataOrientation: true
    });
  };

  const displayRow = () => {
    setDataControl({
      dataOrientation: false
    });
  };

  const category = courses.reduce((accumulator, currentCourse) => {
    const { category } = currentCourse;

    // Check if the category is already in the accumulator
    const existingCategory = accumulator.find((item) => item.category === category);

    if (existingCategory) {
      // If category exists, increment the count
      existingCategory.count += 1;
    } else {
      // If category doesn't exist, add it to the accumulator
      accumulator.push({ category, count: 1 });
    }

    return accumulator;
  }, [] as { category: string; count: number }[]);

  const price = courses.reduce((accumulator, currentCourse) => {
    const { price } = currentCourse;

    // Check if the price is already in the accumulator
    const existingPrice = accumulator.find((item) => item.price === price);

    if (existingPrice) {
      // If price exists, increment the count
      existingPrice.count += 1;
    } else {
      // If price doesn't exist, add it to the accumulator
      accumulator.push({ price, count: 1 });
    }

    return accumulator;
  }, [] as { price: string; count: number }[]);

  const authur = courses.reduce((accumulator, currentCourse) => {
    const { authur } = currentCourse;

    // Check if the authur is already in the accumulator
    const existingAuthur = accumulator.find((item) => item.authur === authur);

    if (existingAuthur) {
      // If authur exists, increment the count
      existingAuthur.count += 1;
    } else {
      // If authur doesn't exist, add it to the accumulator
      accumulator.push({ authur, count: 1 });
    }

    return accumulator;
  }, [] as { authur: string; count: number }[]);

  const filteredData = useMemo(() => {
    let result = courses
    
      // Search Filter
      .filter(item => item.title.toLowerCase().includes(search.toLowerCase()))

      // Categories Filter
      .filter(course => {
        if (categories && categories.length > 0) {
          return categories.includes(course.category)
        }
      })

    return result;
  }, [search]);

  return (
    <div>
      <div className='grid grid-row md:grid-cols-4 lg:grid-cols-4 gap-3 mt-5 w-full md:w-[95%] lg:w-[80%] m-auto p- overflow-hidden'>
        <div className='col-span-3 md:cols-2'>
          <div className='p-2 bg-gray-100 mb-4 flex justify-between items-center'>
            <div className='flex gap-4 items-center'>
              <div className='flex gap-2'>
                <Element3 size="24" color={dataControl.dataOrientation ? "orange" : "gray"} variant='Bold' onClick={displayGrid} className='hover:cursor-pointer' />
                <Task size="24" color={!dataControl.dataOrientation ? "orange" : "gray"} variant='Bold' onClick={displayRow} className='hover:cursor-pointer' />
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
                <input type="text" id="voice-search" value={search ?? ''} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-mine focus:border-mine block w-full ps-2 p-2" placeholder="Search our course"
                  onChange={handleTextSearch}
                />
                <button type="button" className="absolute inset-y-0 end-0 flex items-center text-gray-300 mt-1">
                  <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {
            dataControl.dataOrientation == false ?
              courses.map(({ authur, title, price, image, description, members, amount }, ind) => (
                <CourseCard authur={authur} title={title} price={price} image={image} description={description} key={ind} members={members} amount={amount} />
              ))

              :
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2">
                {
                  courses.map(({ authur, title, price, image, members, amount }, ind) => (
                    <CoursesCard authur={authur} title={title} price={price} image={image} key={ind} members={members} classes='' amount={amount} />
                  ))}
              </div>

          }
        </div>
        <div className='border col-span-3 md:col-span-1 lg:col-span-1 p-3 w-full'>
          <div className='mb-3'>
            <h3 className='p-2 font-bold mb-3'>Categories</h3>
            <label>
              {category.sort((a: { category: string; }, b: { category: string; }) => a.category.localeCompare(b.category)).map(({ category, count }) => (
                <div key={category} className='flex justify-between'>
                  <label className='font-medium text-gray-900 capitalize flex gap-2 items-center mb-2'>
                    <input
                      type="checkbox"
                      value={category}
                      checked={categories.includes(category)}
                      onChange={(e) => handleChecked(e, 'categories', category)}
                      className='w-4 h-4 text-white border-gray-100'
                    />
                    {category}
                  </label>
                  <p>{count}</p>
                </div>
              ))}
            </label>
          </div>

          <div className='mb-3'>
            <h3 className='p-2 font-bold mb-3'>Author</h3>
            <label>
              {authur.map(({ authur, count }) => (
                <div key={authur} className='flex justify-between'>
                  <label className='font-medium text-gray-900 capitalize flex gap-2 items-center mb-2'>
                    <input
                      type="checkbox"
                      value={authur}
                      checked={authors.includes(authur)}
                      onChange={(e) => handleChecked(e, 'authors', authur)}
                      className='w-4 h-4 text-white border-gray-100'
                    />
                    {authur}
                  </label>
                  <p>{count}</p>
                </div>
              ))}
            </label>
          </div>

          <div className='mb-3'>
            <h3 className='p-2 font-bold mb-3'>Price</h3>
            <label>
              {price.map(({ price, count }) => (
                <div key={price} className='flex justify-between'>
                  <label className='font-medium text-gray-900 capitalize flex gap-2 items-center mb-2'>
                    <input
                      type="checkbox"
                      value={price}
                      checked={prices === price}
                      onChange={(e) => setDataControl({ prices: price })}
                      className='w-4 h-4 text-white border-gray-100'
                    />
                    {price}
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