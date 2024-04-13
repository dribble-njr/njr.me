import { FC } from 'react'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { duotoneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { Text } from '@chakra-ui/react'

interface MarkdownProps {
  content: string
}

const Markdown: FC<MarkdownProps> = ({ content }) => {
  return (
    <ReactMarkdown
      components={ChakraUIRenderer({
        code: props => {
          const { children, className, ...rest } = props
          const match = /language-(\w+)/.exec(className || '')
          return match ? (
            <SyntaxHighlighter
              {...rest}
              PreTag="div"
              children={String(children).replace(/\n$/, '')}
              language={match[1]}
              style={duotoneDark}
            />
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          )
        },
        p: props => {
          const { children } = props
          return <Text my={5}>{children}</Text>
        }
      })}
      children={content}
      skipHtml
    />
  )
}

export default Markdown
