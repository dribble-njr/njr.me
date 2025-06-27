import { getAllPosts, getCategories, getTags } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'

export default function BlogPage() {
  const posts = getAllPosts()
  const categories = getCategories()
  const tags = getTags()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">博客文章</h1>
          <p className="text-xl text-gray-600">
            分享技术见解、生活感悟和项目经验
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Categories */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">分类</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/category/${category.slug}`}
                      className="flex items-center justify-between text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <span>{category.name}</span>
                      <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                        {category.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">标签</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.slice(0, 20).map((tag) => (
                    <Link
                      key={tag.slug}
                      href={`/tag/${tag.slug}`}
                      className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
                    >
                      {tag.name}
                      <span className="ml-1 text-xs text-gray-500">
                        ({tag.count})
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

            {/* Empty State */}
            {posts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  暂无文章
                </h3>
                <p className="text-gray-600">
                  还没有发布任何文章，敬请期待！
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

export const metadata = {
  title: '博客文章 - NJR Blog',
  description: '分享技术见解、生活感悟和项目经验的博客文章',
} 