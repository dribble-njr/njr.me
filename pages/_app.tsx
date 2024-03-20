import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import LayOut from '../components/layouts'
import theme from '../logic/theme'

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <LayOut router={router}>
        <Component {...pageProps} key={router.route} />
      </LayOut>
    </ChakraProvider>
  )
}
