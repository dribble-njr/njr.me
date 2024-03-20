import { readdir } from 'fs/promises'
import { join } from 'path'

export default function Posts({ posts }) {
  return (
    <>
      {posts.map(slug => (
        <p key={slug}>{slug}</p>
      ))}
    </>
  )
}

const getPosts = async () => {
  const postsDirectory = join(process.cwd(), 'posts')
  const entries = await readdir(postsDirectory)

  return entries
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
