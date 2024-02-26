import { Accordion } from '@mantine/core';
import CustomForm from '~/components/form';
import Link from 'next/link';
import React from 'react';
import { RootState } from '~/lib/store';
import { SinglePageLayout } from '~/layouts/single-page-layout';
import { useSelector } from 'react-redux';

const FAQs = () => {
  const faqs = useSelector((state: RootState) => state.faqs.faqs);
  const content = [
    {
      title: 'Forward Thinking',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    },
    {
      title: 'Actionable Content',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    },
    {
      title: 'Forward Thinking',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    },
  ];
  return (
    <div>
      <div className='grid grid-row md:grid-cols-2 lg:grid-cols-2 gap-3 w-full lg:w-[80%] m-auto mt-5 lg:mt-10 mb-4 p-3'>
        <div>
          <h3 className='font-bold mb-4 text-[18px] lg:text-[22px]'>
            Purchases & Refunds
          </h3>
          <Accordion defaultValue='' variant='contained'>
            {faqs
              .filter((val) => val.header === 'Purchases & Refunds')
              .map(({ content, header, title }) => (
                <Accordion.Item key={title} value={title}>
                  <Accordion.Control className='font-bold'>
                    {title}
                  </Accordion.Control>
                  <Accordion.Panel>{content}</Accordion.Panel>
                </Accordion.Item>
              ))}
          </Accordion>
        </div>
        <div>
          <h3 className='font-bold mb-4 text-[18px] lg:text-[22px]'>
            Making Courses
          </h3>
          <Accordion defaultValue='' variant='contained'>
            {faqs
              .filter((val) => val.header === 'Making Courses')
              .map(({ content, header, title }) => (
                <Accordion.Item key={title} value={title}>
                  <Accordion.Control>{title}</Accordion.Control>
                  <Accordion.Panel>{content}</Accordion.Panel>
                </Accordion.Item>
              ))}
          </Accordion>
        </div>
      </div>

      <div className='mt-10'>
        <div
          style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/bg-slide-2.webp')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className='h-[55vh] p-3 bg-black opacity-[5] mb-5'>
          <div className='flex flex-col md:flex-row lg:flex-row justify-between text-white gap-4 lg:gap-0 md:items-center lg:items-center w-full lg:w-[80%] m-auto font-bold uppercase mt-[20px] md:mt-[30px] lg:mt-[50px]'>
            <h3 className='md:w-[40%] lg:w-[30%] md:text-[20px] lg:text-[20px]'>
              If You Have Any Questions You Can Call Me 24/7
            </h3>
            <Link href={''} className='md:text-[20px] lg:text-[20px]'>
              Call us now
            </Link>
          </div>
        </div>
        <div className='relative top-[-200px] lg:top-[-250px]'>
          <div className='grid grid-row md:grid-cols-3 lg:grid-cols-3 items-cente w-full lg:w-[80%] m-auto shadow-lg'>
            <div className='col-span-3 md:col-span-1 lg:col-span-1 bg-white p-8 lg:rounded-l-lg'>
              <h3 className='font-bold text-[18px] mb-2 '>
                Take the First Step
              </h3>
              <p className='text-wrap text-gray-400 text-[14px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              {content.map(({ title, desc }, id) => (
                <div className='flex gap-3 mt-3' key={id}>
                  <h1 className='text-[50px] text-gray-300 font-medium hover:text-purple-600 hover:cursor-default'>{`0${
                    id + 1
                  }`}</h1>
                  <div className='mt-4'>
                    <h3 className='font-bold'>{title}</h3>
                    <p className='text-gray-500 text-[15px]'>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className='col-span-3 md:col-span-2 lg:col-span-2 bg-[#3FBB8E] p-8 lg:rounded-r-lg'>
              <h3 className='font-bold mb-3 text-[18px] text-white'>{`Didn't find the answer?`}</h3>
              <CustomForm classes={'lg:w-full'} btn={''} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;

FAQs.getLayout = function (page: React.ReactElement) {
  const event = '/courses/courses-banner.webp';
  return (
    <SinglePageLayout main='FAQs' image={event}>
      {page}
    </SinglePageLayout>
  );
};
