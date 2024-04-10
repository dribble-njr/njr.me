import NextLink from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import {
  Container,
  Box,
  Link,
  Stack,
  IconButton,
  useColorModeValue,
  useBreakpointValue,
  useColorMode
} from '@chakra-ui/react'
import Logo from './logo'
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

const LinkItem = ({ href, path = '', target = '', children, ...props }) => {
  const active = path.startsWith(href)
  const activeColor = useColorModeValue('gray.400', 'whiteAlpha.900')
  const inactiveColor = useColorModeValue('gray.200', 'whiteAlpha.600')

  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      textDecoration={active ? 'underline' : 'none'}
      color={active ? activeColor : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

const Menu = ({ isMenuOpen, path, isSideMenu }) => {
  return (
    <Stack
      display={{
        base: isMenuOpen ? 'flex' : 'none',
        md: isSideMenu ? 'none' : 'flex'
      }}
      direction={{ base: 'column', md: 'row' }}
      width={{ base: 'full', md: 'auto' }}
      alignItems="center"
      justifyContent="space-evenly"
      flex={1}
      mt={{ base: 4, md: 0 }}
    >
      <LinkItem href="/posts" path={path}>
        Posts
      </LinkItem>
      <LinkItem href="/works" path={path}>
        Works
      </LinkItem>
      <LinkItem href="/slides" path={path}>
        Slides
      </LinkItem>
      <LinkItem href="/demos" path={path}>
        Demos
      </LinkItem>

      <Box
        flexShrink={0}
        display={{ base: 'fixed', md: 'none' }}
        zIndex={2}
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
          <NextLink href="/" scroll={false}>
            <Image
              src="images/avatar.jpeg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </NextLink>
        </Box>
      </Box>
    </Stack>
  )
}

const NavBar = ({ path }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { colorMode, toggleColorMode } = useColorMode()

  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isPc = useBreakpointValue({ base: false, md: true })

  useEffect(() => {
    setIsMenuOpen(false)
  }, [isPc])

  return (
    <Box
      as="nav"
      position="fixed"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
    >
      <Container
        display="flex"
        p={2}
        pl={{ base: 5 }}
        pr={{ base: 5 }}
        maxW="container.md"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box mr={5} flex={1}>
          <Logo />
        </Box>

        <Menu isMenuOpen={false} path={path} isSideMenu={false} />

        <Box flex={1} display="flex" justifyContent="end">
          <Box
            as={IconButton}
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="link"
          />
          <Box
            display={{ md: 'none' }}
            as={IconButton}
            icon={<HamburgerIcon />}
            variant="link"
            aria-label="Options"
            onClick={toggleNavbar}
          />
        </Box>
      </Container>

      <Menu isMenuOpen={isMenuOpen} path={path} isSideMenu />
    </Box>
  )
}

export default NavBar
