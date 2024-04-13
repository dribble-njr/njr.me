import type { AppProps } from 'next/app'
import { LayOut, Chakra } from '../components'

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <LayOut router={router}>
        <Component {...pageProps} key={router.route} />
      </LayOut>
    </Chakra>
  )
}
