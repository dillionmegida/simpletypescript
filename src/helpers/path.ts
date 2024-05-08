import type { RootPath } from "../types/Course"

export function getFullPath(root: RootPath, slug: string) {
  return `/${root}/${slug}` as const
}

export function removeNumberPrefix(slug: string) {
  return slug.replace(/\d+\-/, "")
}