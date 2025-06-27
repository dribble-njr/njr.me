import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface PostPageProps {
  params: {
    slug: string[]
  }
}

export default function PostPage({ params }: PostPageProps) {
  const slug = params.slug.join('/')
  const post = getPostBySlug(slug)
  
  if (!post) {
    notFound()
  }
  
  const relatedPosts = getRelatedPosts(post)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Article Header */}
      <header className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-6">
            <Link
              href="/blog"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              ← 返回博客
            </Link>
          </div>
          
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-sm text-blue-600 font-medium">
              {post.category}
            </span>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-500">
              {formatDate(post.date)}
            </span>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-500">
              {post.readingTime} 分钟阅读
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-6">
            {post.summary}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div>
                <p>创建时间：{formatDate(post.gitInfo.created)}</p>
                <p>最后更新：{formatDate(post.gitInfo.updated)}</p>
              </div>
              <div className="text-right">
                <p>文件路径：{post.filePath}</p>
                <p>Git 提交：{post.gitInfo.commits} 次</p>
              </div>
            </div>
          </footer>
        </article>
      </main>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">相关文章</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((relatedPost) => (
              <article
                key={relatedPost.slug}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-sm text-blue-600 font-medium">
                    {relatedPost.category}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-500">
                    {formatDate(relatedPost.date)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {relatedPost.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {relatedPost.summary}
                </p>
                <div className="flex flex-wrap gap-1">
                  {relatedPost.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(post => ({
    slug: post.slug.split('/')
  }))
}

export async function generateMetadata({ params }: PostPageProps) {
  const slug = params.slug.join('/')
  const post = getPostBySlug(slug)
  
  if (!post) {
    return {
      title: '文章未找到'
    }
  }
  
  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags
    }
  }
} 