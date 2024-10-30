interface Duration {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const parseISODuration = (isoDuration: string): Duration => {
  const regex = /P(?:(\d+)D)?T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/
  const matches = isoDuration.match(regex)

  if (!matches) {
    throw new Error('Invalid ISO 8601 duration format')
  }

  const days = parseInt(matches[1] || '0', 10)
  const hours = parseInt(matches[2] || '0', 10)
  const minutes = parseInt(matches[3] || '0', 10)
  const seconds = parseInt(matches[4] || '0', 10)

  return {
    days,
    hours,
    minutes,
    seconds
  }
}

const formatDuration = (durationString: string): string => {
  const duration = parseISODuration(durationString)
  const { days, hours, minutes, seconds } = duration

  const parts: string[] = []

  if (days > 0) {
    parts.push(`${days} day${days !== 1 ? 's' : ''}`)
  }
  if (hours > 0) {
    parts.push(`${hours} hour${hours !== 1 ? 's' : ''}`)
  }
  if (minutes > 0) {
    parts.push(`${minutes} minute${minutes !== 1 ? 's' : ''}`)
  }
  if (seconds > 0) {
    parts.push(`${seconds} second${seconds !== 1 ? 's' : ''}`)
  }

  return parts.join(', ') || '0 seconds'
}
export { formatDuration }
