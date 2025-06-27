export interface Post {
  slug: string
  title: string
  date: string
  summary: string
  category: string
  tags: string[]
  content: string
  filePath: string
  gitInfo: {
    created: string
    updated: string
    commits: number
  }
  frontmatter: {
    category?: string
    tags?: string[]
    date?: string
    draft?: boolean
    featured?: boolean
  }
  readingTime: number
}

export interface Category {
  name: string
  count: number
  slug: string
}

export interface Tag {
  name: string
  count: number
  slug: string
} 