import '~/styles/globals.css';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import type { AppProps } from 'next/app';
import BackToTopButton from '~/components/back-to-top';
import BuyNowButton from '~/components/buy-now';
import { Footer } from '~/components/footer';
import { MantineProvider } from '@mantine/core';
import NextAdapterApp from 'next-query-params/app';
import { NextPage } from 'next';
import { Provider } from 'react-redux';
import { QueryParamProvider } from 'use-query-params';
import { store } from '~/lib/store';
import { useRouter } from 'next/router';

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
const theme = {
  /** Put your mantine theme override here */
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const { asPath } = useRouter();
  const getLayout = Component.getLayout ?? ((page: React.ReactElement) => page);

  return (
    <>
      <Provider store={store}>
        <QueryParamProvider adapter={NextAdapterApp}>
          <MantineProvider theme={theme}>
            <BackToTopButton />
            <BuyNowButton />
            {getLayout(<Component {...pageProps} />)}

            <Footer />
            {asPath === '/' && (
              <div
                style={{
                  background: `linear-gradient(to bottom, rgba(255, 215, 110, 0.9), rgba(0, 100, 15, 0.3)), url('/footer.webp')`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundAttachment: 'fixed',
                }}
                className='h-[65vh] relative'>
                <div className='right-0 left-0 w-[70%] m-auto text-center absolute top-[120px] lg:top-[200px]'>
                  <h3 className='font-bold mb-4 text-[36px]'>
                    BECOME AN INSTRUCTOR?
                  </h3>
                  <p className='mb-4 text-[18px]'>
                    Join thousand of instructors and earn money hassle free!
                  </p>
                  <button className='border-2 p-3 font-semibold border-black hover:bg-black hover:text-white'>
                    Get Started Now
                  </button>
                </div>
              </div>
            )}
          </MantineProvider>
        </QueryParamProvider>
      </Provider>
    </>
  );
}

