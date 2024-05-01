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

function sum(nums: number[]) {
  return nums.reduce((a, b) => a + b)
}

sum([2, 10, 100, "hello"])
