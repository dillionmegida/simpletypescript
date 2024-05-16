import type { LINKS } from "../constants";

export type RootPath = keyof typeof LINKS.pagePaths

export type Lesson = {
	id: string;
  slug: string;
	data: LessonFrontmatter
};

export type LessonFrontmatter = {
  title: string
  description: string
  cover?: string
  video?: string
}