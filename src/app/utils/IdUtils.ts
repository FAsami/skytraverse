const characters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'

export const encodeId = (id: string): string => {
  const byteArray = new TextEncoder().encode(id)
  let encoded = ''

  for (let i = 0; i < byteArray.length; i += 3) {
    const byte1 = byteArray[i]
    const byte2 = i + 1 < byteArray.length ? byteArray[i + 1] : 0
    const byte3 = i + 2 < byteArray.length ? byteArray[i + 2] : 0

    const encodedIndex1 = byte1 >> 2
    const encodedIndex2 = ((byte1 & 3) << 4) | (byte2 >> 4)
    const encodedIndex3 = ((byte2 & 15) << 2) | (byte3 >> 6)
    const encodedIndex4 = byte3 & 63

    encoded += characters[encodedIndex1]
    encoded += characters[encodedIndex2]
    if (i + 1 < byteArray.length) {
      encoded += characters[encodedIndex3]
    }
    if (i + 2 < byteArray.length) {
      encoded += characters[encodedIndex4]
    }
  }

  return encoded
}

export const decodeId = (encoded: string): string => {
  const byteArray: number[] = []

  for (let i = 0; i < encoded.length; i += 4) {
    const index1 = characters.indexOf(encoded[i])
    const index2 = characters.indexOf(encoded[i + 1])
    const index3 = characters.indexOf(encoded[i + 2])
    const index4 = characters.indexOf(encoded[i + 3])

    // Ensure valid indices are found
    if (index1 < 0 || index2 < 0) {
      throw new Error('Invalid encoded string')
    }

    const byte1 = (index1 << 2) | (index2 >> 4)
    const byte2 = ((index2 & 15) << 4) | (index3 >> 2)
    const byte3 = ((index3 & 3) << 6) | index4

    byteArray.push(byte1)
    if (index3 >= 0) byteArray.push(byte2)
    if (index4 >= 0) byteArray.push(byte3)
  }

  return new TextDecoder().decode(new Uint8Array(byteArray))
}
