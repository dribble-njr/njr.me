import { readFile, readdir } from 'fs/promises'
import matter from 'gray-matter'
import { join } from 'path'
import { Post } from '../../@interface/post'

export default function Posts({ posts }: { posts: Post[] }) {
  return (
    <>
      {posts.map(post => (
        <p key={post.slug}>{post.title}{post.date}{post.summary}</p>
      ))}
    </>
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
    return { slug: entry, ...data, date } as Post
  })

  posts.sort((a, b) => {
    return Date.parse(b.date) - Date.parse(a.date)
  })

  console.log(fileContents, '===', posts)

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
