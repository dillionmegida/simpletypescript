export type Error = {
  id: string
  slug: string
  data: ErrorFrontmatter
}

export type ErrorFrontmatter = {
  title: string
  description: string
  cover?: string
}
