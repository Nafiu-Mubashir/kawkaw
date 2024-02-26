import { Accordion } from '@mantine/core';
import { Eye } from 'iconsax-react';
import React from 'react';

const Curriculum = () => {
  const curriculum = [
    {
      title: 'Intoduction',
      videoNum: 1,
      videoTitle: 'Introduction',
    },
    {
      title: 'learn',
      videoNum: 2,
      videoTitle: 'Introduction',
    },
    {
      title: 'study',
      videoNum: 3,
      videoTitle: 'Introduction',
    },
  ];
  return (
    <div className='p-5'>
      <Accordion
        defaultValue=''
        // variant='contained'
        chevronPosition='left'
        disableChevronRotation
        classNames={{
          chevron: '',
        }}>
        {curriculum.map(({ title, videoNum, videoTitle }, id) => (
          <Accordion.Item value={title} key={id}>
            <Accordion.Control
              className='font-bold'
              icon={<p className='text-mine'>{videoNum}</p>}>
              <h1 className='font-bold capitalize text-[16.5px]'>{title}</h1>
            </Accordion.Control>
            <Accordion.Panel>
              <div className='flex items-center justify-between'>
                <p>
                  <span className='text-gray-400'>Lecture {id + 1}</span>{' '}
                  {videoTitle}
                </p>
                <div className='flex items-center gap-1'>
                  <p className='text-gray-400'>4 minutes</p>
                  <Eye size='20' color='green' variant='Bold' />
                </div>
              </div>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default Curriculum;
