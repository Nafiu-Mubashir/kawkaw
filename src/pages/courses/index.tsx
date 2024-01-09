import { Element3, Firstline, Task } from 'iconsax-react';
import React, { ChangeEvent, useState } from 'react'

import CourseCard from '~/components/cards/courses-card/courses-page'
import { RootState } from '~/lib/store';
import { SinglePageLayout } from '~/layouts/single-page-layout'
import { useSelector } from 'react-redux';

export default function Courses() {
  const courses = useSelector((state: RootState) => state.course.course);
  // console.log(courses);
  
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [orderBy, setOrderBy] = useState<'alphabetical' | 'members'>('alphabetical');

  const handleCategoryFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedCategory = event.target.value;
    const updatedFilters = event.target.checked
      // ? [...categoryFilter, selectedCategory]
      // : categoryFilter.filter((category: string) => category !== selectedCategory);

    // setCategoryFilter(updatedFilters);
    // filterCourses(updatedFilters, searchQuery, orderBy);
  };

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    filterCourses(categoryFilter, event.target.value, orderBy);
  };

  const handleOrderByChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setOrderBy(event.target.value as 'alphabetical' | 'members');
    filterCourses(categoryFilter, searchQuery, event.target.value as 'alphabetical' | 'members');
  };
  
  const filterCourses = (category: string, search: string, order: 'alphabetical' | 'members') => {
    let filtered = courses;

    if (category.length > 0) {
      filtered = filtered.filter(course => category.includes(course.category));
    }

    if (search) {
      const lowerCaseSearch = search.toLowerCase();
      filtered = filtered.filter(
        course =>
          course.title.toLowerCase().includes(lowerCaseSearch) ||
          course.authur.toLowerCase().includes(lowerCaseSearch) ||
          course.description.toLowerCase().includes(lowerCaseSearch)
      );
    }

    if (order === 'alphabetical') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (order === 'members') {
      filtered.sort((a, b) => a.members - b.members);
    }

    setFilteredCourses([...filtered]);
  };
  const uniqueCategories = Array.from(new Set(courses.map(course => course.category)));
  console.log(uniqueCategories);
  
  return (
    <div>
      <div className='grid grid-row md:grid-cols-4 lg:grid-cols-4 w-full md:w-[95%] lg:w-[80%] m-auto'>
        <div className='col-span-3 p-3'>
          <div className='p-2 bg-gray-100 mb-4 flex justify-between items-center'>
            <div className='flex gap-4 items-center'>
              <div className='flex gap-2'>
                <Element3 size="24" color="gray" variant='Bold' />
                <Task size="24" color="gray" variant='Bold' />
                {/* <Firstline size="32" color="gray" /> */}
              </div>
              <p className='hidden lg:block'>Showing 1-12 of 19 results</p>
            </div>

            <div className='flex justify-between flex-wrap md:flex-nowrap lg:flex-nowrap gap-4'>
              <select id="countries" value={orderBy} onChange={handleOrderByChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-mine focus:border-mine block lg:w-full p-2">
                <option selected disabled>Newly Published</option>
                <option value="alphabetical">Alphabetical</option>
                <option value="members">Number of Members</option>
              </select>

              <div className="relative w-full">
                <input type="text" id="voice-search" value={searchQuery} onChange={handleSearchInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-mine focus:border-mine block w-full ps-2 p-2" placeholder="Search our course" required />
                  <button type="button" className="absolute inset-y-0 end-0 flex items-center text-gray-300 mt-1">
                  <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                  </button>
              </div>
            </div>
          </div>
          {
            filteredCourses.map(({ authur, title, price, image, description, members }, ind) => (
              <CourseCard authur={authur} title={title} price={price} image={image} description={description} key={ind} members={members} />
            ))
          }
        </div>
        <div className='border p-2'>
          <div>
            <h3 className='p-2 font-bold border-b-4 border-mine'>Categories</h3>

            <label>
              {uniqueCategories.map(category => (
                <div key={category}>
                  <label>
                    <input
                      type="checkbox"
                      value={category}
                      checked={categoryFilter.includes(category)}
                      onChange={handleCategoryFilterChange}
                    />
                    {category}
                  </label>
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