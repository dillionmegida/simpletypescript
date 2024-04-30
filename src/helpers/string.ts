export function addEllipsis(str: string, max: number = 70) {
  if (str.length <= max) return str

  return str.substring(0, max) + "..."
}
