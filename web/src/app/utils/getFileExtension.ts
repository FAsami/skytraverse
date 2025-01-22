const getFileExtension = (fileName: string): string => {
  const extensionIndex = fileName.lastIndexOf('.')
  return extensionIndex !== -1 ? fileName.slice(extensionIndex) : ''
}
export { getFileExtension }
