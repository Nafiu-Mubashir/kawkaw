import '~/styles/globals.css'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import type { AppProps } from 'next/app'
import BackToTopButton from '~/components/back-to-top';
import BuyNowButton from '~/components/buy-now';
import { Footer } from '~/components/footer';
import { MantineProvider } from '@mantine/core'
import { NextPage } from 'next'
import { Provider } from 'react-redux';
import { store } from '~/lib/store';

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
const theme = ({
  /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: React.ReactElement) => page);

  return <>
    <Provider store={store}>
      <MantineProvider theme={theme}>
        <BackToTopButton />
        <BuyNowButton />
        {getLayout(<Component {...pageProps} />)}
        <Footer />
      </MantineProvider>
    </Provider>
  </>
}
