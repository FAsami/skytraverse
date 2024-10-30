export type ActionResponse = {
  error?: Error | unknown
  message: string
  success: boolean
  data?: T
}
