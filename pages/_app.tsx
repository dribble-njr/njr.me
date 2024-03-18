import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import LayOut from '../components/layouts'

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider>
      <LayOut router={router}>
        <Component {...pageProps} key={router.route} />
      </LayOut>
    </ChakraProvider>
  )
}
