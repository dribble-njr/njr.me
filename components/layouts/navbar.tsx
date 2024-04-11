import NextLink from 'next/link'
import { useEffect, useState } from 'react'
import {
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
import { usePathname } from 'next/navigation'

const LinkItem = ({ href, path = '', target = '', children, ...props }) => {
  const active = path === href
  const activeColor = useColorModeValue('#000', 'whiteAlpha.900')
  const inactiveColor = useColorModeValue('#999999', 'whiteAlpha.600')

  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      textDecoration="none"
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
      bgColor="#fff"
    >
      <LinkItem href="/" path={path}>
        About
      </LinkItem>
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
    </Stack>
  )
}

const NavBar = ({ path }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { colorMode, toggleColorMode } = useColorMode()
  const pathname = usePathname()

  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isPc = useBreakpointValue({ base: false, md: true })

  useEffect(() => {
    setIsMenuOpen(false)
  }, [isPc])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <Box
      as="nav"
      position="fixed"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
    >
      <Box
        display="flex"
        p={2}
        pl={{ base: 5 }}
        pr={{ base: 5 }}
        w="100%"
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
      </Box>

      <Menu isMenuOpen={isMenuOpen} path={path} isSideMenu />
    </Box>
  )
}

export default NavBar
