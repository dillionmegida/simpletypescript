export type Tip = {
	id: string;
  slug: string;
	data: TipFrontmatter
};

export type TipFrontmatter = {
  title: string
  description: string
  cover?: string
}