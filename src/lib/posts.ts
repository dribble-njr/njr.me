import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Post, Category, Tag } from './types'
import { getReadingTime } from './utils'

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts')

// 获取 Git 信息（简化版本，实际项目中可以更复杂）
function getGitInfo(filePath: string) {
  try {
    const fullPath = path.join(POSTS_DIR, filePath)
    const stats = fs.statSync(fullPath)
    
    return {
      created: stats.birthtime.toISOString(),
      updated: stats.mtime.toISOString(),
      commits: 1
    }
  } catch (error) {
    return {
      created: new Date().toISOString(),
      updated: new Date().toISOString(),
      commits: 1
    }
  }
}

export function getAllPosts(): Post[] {
  const posts: Post[] = []
  
  function traverseDir(dir: string, categoryPath: string = '') {
    if (!fs.existsSync(dir)) return
    
    const files = fs.readdirSync(dir)
    
    for (const file of files) {
      const filePath = path.join(dir, file)
      const stat = fs.statSync(filePath)
      
      if (stat.isDirectory()) {
        const newCategoryPath = categoryPath ? `${categoryPath}/${file}` : file
        traverseDir(filePath, newCategoryPath)
      } else if (file.endsWith('.md')) {
        const content = fs.readFileSync(filePath, 'utf8')
        const { data, content: markdownContent } = matter(content)
        
        const relativePath = path.relative(POSTS_DIR, filePath)
        const slug = relativePath.replace(/\.md$/, '')
        
        // 获取 Git 信息
        const gitInfo = getGitInfo(relativePath)
        
        // 确定分类：优先使用 frontmatter，否则使用文件夹路径
        const category = data.category || categoryPath
        
        // 确定日期：优先使用 frontmatter，否则使用 Git 创建时间
        const date = data.date || gitInfo.created
        
        // 确定标签：使用 frontmatter 中的标签
        const tags = data.tags || []
        
        // 跳过草稿文章（除非在开发环境）
        if (data.draft && process.env.NODE_ENV === 'production') {
          continue
        }
        
        posts.push({
          slug,
          title: data.title,
          date,
          summary: data.summary,
          category,
          tags,
          content: markdownContent,
          filePath: relativePath,
          gitInfo,
          frontmatter: {
            category: data.category,
            tags: data.tags,
            date: data.date,
            draft: data.draft,
            featured: data.featured
          },
          readingTime: getReadingTime(markdownContent)
        })
      }
    }
  }
  
  traverseDir(POSTS_DIR)
  
  // 按日期排序（最新的在前）
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | null {
  const posts = getAllPosts()
  return posts.find(post => post.slug === slug) || null
}

export function getPostsByCategory(category: string): Post[] {
  const posts = getAllPosts()
  return posts.filter(post => post.category === category)
}

export function getPostsByTag(tag: string): Post[] {
  const posts = getAllPosts()
  return posts.filter(post => post.tags.includes(tag))
}

export function getFeaturedPosts(): Post[] {
  const posts = getAllPosts()
  return posts.filter(post => post.frontmatter.featured)
}

export function getRelatedPosts(currentPost: Post, limit: number = 5): Post[] {
  const posts = getAllPosts()
  const currentTags = currentPost.tags
  
  return posts
    .filter(post => post.slug !== currentPost.slug)
    .map(post => ({
      post,
      score: post.tags.filter(tag => currentTags.includes(tag)).length
    }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post)
}

export function getCategories(): Category[] {
  const posts = getAllPosts()
  const categoryMap = new Map<string, number>()
  
  posts.forEach(post => {
    const count = categoryMap.get(post.category) || 0
    categoryMap.set(post.category, count + 1)
  })
  
  return Array.from(categoryMap.entries())
    .map(([name, count]) => ({
      name,
      count,
      slug: name.toLowerCase().replace(/\s+/g, '-')
    }))
    .sort((a, b) => b.count - a.count)
}

export function getTags(): Tag[] {
  const posts = getAllPosts()
  const tagMap = new Map<string, number>()
  
  posts.forEach(post => {
    post.tags.forEach(tag => {
      const count = tagMap.get(tag) || 0
      tagMap.set(tag, count + 1)
    })
  })
  
  return Array.from(tagMap.entries())
    .map(([name, count]) => ({
      name,
      count,
      slug: name.toLowerCase().replace(/\s+/g, '-')
    }))
    .sort((a, b) => b.count - a.count)
} 