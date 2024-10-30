const isValidUrl = (str: unknown) => {
  try {
    if (typeof str === 'string') {
      new URL(str)
      return true
    }
    return false
  } catch (error) {
    return false
  }
}
export { isValidUrl }
