import { readFile, readdir } from 'fs/promises'
import { join } from 'path'
import matter from 'gray-matter'
import { MetaData } from '../../@interface/post'
import { Box, Heading } from '@chakra-ui/react'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { duotoneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export default function Page({
  metaData,
  content
}: {
  metaData: MetaData
  content: string
}) {
  return (
    <Box mt={8}>
      <Heading as="h2">Post: {metaData.title}</Heading>
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
          }
        })}
        children={content}
        skipHtml
      />
    </Box>
  )
}

const getPost = async slug => {
  const filePath = join(process.cwd(), 'posts', `${slug}.md`)
  const file = await readFile(filePath, 'utf8')
  const { data, content } = matter(file)
  const date = new Date(data.date).toISOString()

  return { metaData: { ...data, date } as MetaData, content }
}

export async function getStaticPaths() {
  // Return all posts's slug to generate possible route.
  const postsDirectory = join(process.cwd(), 'posts')
  const entries = await readdir(postsDirectory)

  return {
    paths: entries.map(entry => ({ params: { slug: entry.split('.')[0] } })),
    fallback: false
  }
}

export async function getStaticProps(context) {
  const { slug } = context.params
  const { metaData, content } = await getPost(slug)

  return {
    props: { metaData, content }
  }
}
