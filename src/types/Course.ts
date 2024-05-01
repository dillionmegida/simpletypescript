export type RootPath = "tips" | "course"

export type Lesson = {
	id: string;
  slug: string;
	data: LessonFrontmatter
};

export type LessonFrontmatter = {
  title: string
  description: string
}