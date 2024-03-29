import { ArrowRight2 } from 'iconsax-react';
import Link from 'next/link';
import { Navabr } from '~/components/navbar';
import React from 'react';
import { useRouter } from 'next/router';

export function SinglePageLayout({
  image,
  children,
  main
}: {
  image?: string;
  children: React.ReactNode;
  main?: string
}) {
  const fallBackImg = '/top-heading-course-new.webp';
  const { asPath, basePath } = useRouter();
  const path = asPath
    .replace(/[?#].*$/, '')
    .split('/')
    .filter((el) => el);

  return (
    <div>
      <div
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${
            image ?? fallBackImg
          }')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className='h-[35vh] bg-black opacity-[5]'>
        <Navabr position='sticky' />
        <div className='p-5 lg:mt-10'>
          <p className='text-white font-bold uppercase text-[30px] lg:text-[40px] w-[80%] m-auto border-l-4 border-mine p-1'>
            {path.map((el) => (
              <span key={el}> {decodeURI(el)}</span>
            ))}
          </p>
        </div>
      </div>
      <div className='w-[90%] lg:w-[70%] m-auto flex items-center gap-2 border-b p-3 text-md capitalize'>
        <Link href='/'>Home</Link>{' '}
        <ArrowRight2 size='13' color='#222222' className='mt-1' />{' '}
        {path.map((el) => (
          <span key={el}> {decodeURI(el)}</span>
        ))}
      </div>
      {children}
    </div>
  );
}
