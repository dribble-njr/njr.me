import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#ffffff', '#202023')(props)
    },
    '.text-muted': {
      color: mode('#999999', 'gray')(props)
    },
    blockquote: {
      marginLeft: '-1.1em',
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '1.6em',
      padding: '.5em 1em',
      borderLeftWidth: '.25rem',
      borderColor: '#7d7d7d4d',
      quotes: '"“" "”" "‘" "’"',
      marginTop: '1.6em',
      marginBottom: '1.6em',
      backgroundColor: 'unset !important',
      color: mode('#999999', 'gray')(props),

      p: {
        margin: '0px !important',
        color: mode('#999999', 'gray')(props)
      }
    },
    hr: {
      margin: '2em auto'
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#000', '#ff63c3')(props),
      _hover: {
        color: mode('#09f', '#fff')(props),
        textDecoration: 'none'
      }
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  grassTeal: '#88ccca'
}

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })

export default theme
