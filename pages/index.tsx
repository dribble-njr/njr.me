import { Box, Container, Heading } from '@chakra-ui/react'
import Image from 'next/image'

export default function Page() {
  return (
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an frontend developer!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            njr
          </Heading>
          <p>Enquanto houver 1% de chance, teremo 99% fé.</p>
        </Box>

        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/avatar.jpeg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>
      <div>hello</div>
    </Container>
  )
}
