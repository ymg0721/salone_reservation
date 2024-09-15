export function getNorilizePath(fullPath: string): string {
  return fullPath.split(/[?#]/)[0]
}
