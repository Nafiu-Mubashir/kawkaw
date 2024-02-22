import {
  Arrow,
  Book1,
  Flash,
  LanguageSquare,
  MessageQuestion,
  Teacher,
  Timer1,
} from 'iconsax-react';

import React from 'react';

const Overview = ({ overview }: { overview: string | undefined }) => {
  const features = [
    {
      icon: <Book1 size='18' color='#FFB606' />,
      title: 'lectures',
      des: '15',
    },
    {
      icon: <MessageQuestion size='18' color='#FFB606' />,
      title: 'Quizzes',
      des: '1',
    },
    {
      icon: <Timer1 size='18' color='#FFB606' />,
      title: 'Duration',
      des: '3 hours',
    },
    {
      icon: <Arrow size='18' color='#FFB606' />,
      title: 'Skill level',
      des: 'All levels',
    },
    {
      icon: <LanguageSquare size='18' color='#FFB606' />,
      title: 'Language',
      des: 'English',
    },
    {
      icon: <Teacher size='18' color='#FFB606' />,
      title: 'Students',
      des: '521',
    },
    {
      icon: <Flash size='18' color='#FFB606' />,
      title: 'Assesments',
      des: 'Yes',
    },
  ];
  return (
    <div className='lg:p-4 flex flex-col lg:flex-row'>
      <div className='p-3 lg:w-[65%]'>
        <h1 className='font-bold text-[18px] lg:text-[21px] mb-4'>
          COURSE DESCRIPTION
        </h1>
        <p className='text-[15px]'>{overview}</p>
      </div>
      <div className='p-3 border-l lg:w-[35%]'>
        <h1 className='font-bold text-[16px] mb-4 p-2'>COURSE FEATUREs</h1>
        <ul className='divide-y'>
          {features.map(({ des, icon, title }, id) => (
            <li className='p-3' key={id}>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-1'>
                  <i>{icon}</i>
                  <p className='text-[14px]'>{title}</p>
                </div>
                <div className='inline-flex text-[14px] items-center text-base font-semibold '>
                  {des}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Overview;
