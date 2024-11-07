const shortenFileName = (fileName: string, maxLength: number = 10): string => {
  const extensionIndex = fileName.lastIndexOf('.')
  if (extensionIndex === -1) return fileName

  const name = fileName.slice(0, extensionIndex)
  const extension = fileName.slice(extensionIndex)

  if (name.length <= maxLength) return fileName

  const shortenedName = name.slice(0, maxLength - 3)
  return `${shortenedName}...${extension}`
}
export { shortenFileName }
