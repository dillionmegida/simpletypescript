type RootPath = "tips"

export function getFullPath(root: RootPath, slug: string) {
  return `/${root}/${slug}` as const
}
