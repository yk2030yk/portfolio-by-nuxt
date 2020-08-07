export function insertStr(
  targetString: string,
  insertString: string,
  position: number
): string {
  const length: number = targetString.length
  return (
    targetString.substr(0, position) +
    insertString +
    targetString.substr(position, length)
  )
}