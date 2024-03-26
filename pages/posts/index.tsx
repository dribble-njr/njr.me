import { readFile, readdir } from 'fs/promises'
import matter from 'gray-matter'
import { join } from 'path'
import { Post } from '../../@interface/post'
import { Box, Heading, Text } from '@chakra-ui/react'
import { Link } from '../../components'

export default function Posts({ posts }: { posts: Post[] }) {
  return (
    <Box mt={8}>
      {posts.map(post => (
        <Link key={post.slug} p={3} href={'/posts/' + post.slug + '/'}>
          <Box as={'article'}>
            <Heading mb={2}>{post.title}</Heading>
            <Text>
              {new Date(post.date).toLocaleDateString('en', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </Text>
            <Text>{post.summary}</Text>
          </Box>
        </Link>
      ))}
    </Box>
  )
}

const getPosts = async () => {
  const postsDirectory = join(process.cwd(), 'posts')
  const entries = await readdir(postsDirectory)

  const fileContents = await Promise.all(
    entries.map(entry => readFile(postsDirectory + `/${entry}`, 'utf8'))
  )

  const posts = entries.map((entry, i) => {
    const fileContent = fileContents[i]
    const { data } = matter(fileContent)
    const date = new Date(data.date).toISOString()
    return { slug: entry.split('.')[0], ...data, date } as Post
  })

  posts.sort((a, b) => {
    return Date.parse(b.date) - Date.parse(a.date)
  })

  return posts
}

export async function getStaticProps() {
  const posts = await getPosts()
  console.log(posts, 'posts')

  return {
    props: {
      posts
    }
  }
}
