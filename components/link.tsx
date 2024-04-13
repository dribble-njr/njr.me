import NextLink from 'next/link'
import {
  LinkProps as ChakraLinkProps,
  Link as ChakraLink
} from '@chakra-ui/react'
import { FC, HTMLAttributeAnchorTarget, ReactNode, useTransition } from 'react'
import { useRouter } from 'next/router'

interface LinkProps extends ChakraLinkProps {
  href: string
  target?: HTMLAttributeAnchorTarget
  children: ReactNode
}

const Link: FC<LinkProps> = ({ children, href, target, ...rest }) => {
  const router = useRouter()
  const [isNavigating, trackNavigation] = useTransition()
  if (!target && !href.startsWith('/')) {
    target = '_blank'
  }

  return (
    <ChakraLink
      {...rest}
      href={href}
      target={target}
      as={NextLink}
      onClick={e => {
        e.preventDefault()
        trackNavigation(() => {
          router.push(e.currentTarget.href)
        })
      }}
      transform={isNavigating ? 'scale(1)' : ''}
      opacity={isNavigating ? 0.85 : 1}
      transition={'transform 0.2s ease-in-out, opacity 0.2s 0.4s linear'}
    >
      {children}
    </ChakraLink>
  )
}

export default Link
