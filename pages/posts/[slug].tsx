import { readFile, readdir } from 'fs/promises'
import { join } from 'path'
import matter from 'gray-matter'
import { Box, Heading, Text } from '@chakra-ui/react'

import { MetaData } from '../../@interface/post'
import { formatDate } from '../../logic/utils'
import { Markdown } from '../../components'

export default function Page({
  metaData,
  content
}: {
  metaData: MetaData
  content: string
}) {
  return (
    <Box mt={20}>
      <Box>
        <Heading as="h1">Post: {metaData.title}</Heading>
        <Text className="text-muted">{formatDate(metaData.date)}</Text>

        <blockquote>{metaData.summary}</blockquote>
      </Box>

      <Box>
        <Markdown content={content} />
      </Box>
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
