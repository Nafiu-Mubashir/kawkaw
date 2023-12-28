import '~/styles/globals.css'
import '@mantine/core/styles.css';

import { MantineProvider, createTheme } from '@mantine/core'

import type { AppProps } from 'next/app'
import { Footer } from '~/components/footer';
import { NextPage } from 'next'

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

    <MantineProvider  theme={theme}>
      {getLayout(<Component {...pageProps} />)}
      <Footer />
    </MantineProvider>
  </>
}
