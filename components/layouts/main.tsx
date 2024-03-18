import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Box, Container } from '@chakra-ui/react'

import NavBar from './navbar'
import GLTFViewer from '../gltf-viewer'

const urlGLTF =
  (process.env.NODE_ENV === 'production'
    ? ''
    : '') + '/dog.glb'

const LazyGLTFViewer = dynamic(() => import('../gltf-viewer'), {
  ssr: false,
  loading: () => <GLTFViewer url={urlGLTF} />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width initial-scale=1.0" />
        <title>njr - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyGLTFViewer url={urlGLTF} />

        {children}
      </Container>
    </Box>
  )
}

export default Main
