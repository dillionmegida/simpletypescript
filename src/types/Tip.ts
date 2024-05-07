export type Tip = {
  id: string
  slug: string
  data: TipFrontmatter
}

export type TipFrontmatter = {
  title: string
  description: string
  cover?: string
}

const obj = {
  '/about': 'bg-orange',
  '/contact': 'bg-purple',
  '/services': 'bg-yellow'
}

type /**/Path/**/ = keyof typeof obj