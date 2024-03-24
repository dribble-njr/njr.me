export interface MetaData {
  title: string
  date: string
  summary: string
}
export interface Post extends MetaData {
  slug: string
}
