import { getPostsByCategory, getCategories } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const posts = getPostsByCategory(params.category)
  
  if (posts.length === 0) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-4">
            <Link
              href="/blog"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              ← 返回博客
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            分类：{params.category}
          </h1>
          <p className="text-xl text-gray-600">
            共 {posts.length} 篇文章
          </p>
        </div>
      </header>

      {/* Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-sm text-blue-600 font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-500">
                    {formatDate(post.date)}
                  </span>
                  {post.frontmatter.featured && (
                    <>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-yellow-600 font-medium">
                        精选
                      </span>
                    </>
                  )}
                </div>
                
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.summary}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Link
                        key={tag}
                        href={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                        className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs text-gray-500">
                        +{post.tags.length - 3}
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-gray-500">
                    {post.readingTime} 分钟
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  const categories = getCategories()
  return categories.map(category => ({ 
    category: category.slug 
  }))
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const posts = getPostsByCategory(params.category)
  
  return {
    title: `${params.category} - 分类 - NJR Blog`,
    description: `${params.category} 分类下的 ${posts.length} 篇文章`,
  }
} 