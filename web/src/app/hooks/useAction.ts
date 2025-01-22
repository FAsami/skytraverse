import { useEffect, useState, useTransition } from 'react'
import { ActionResponse } from '@/types/actions'

const initialState: ActionResponse = {
  success: false,
  error: null,
  message: ''
}

const useAction = (fn: () => Promise<ActionResponse | void>) => {
  const [isLoading, startTransition] = useTransition()
  const [result, setResult] = useState<ActionResponse>(initialState)
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [isLoading])

  const executeAction = async () => {
    startTransition(async () => {
      setResult(initialState)
      try {
        const result = await fn()
        if (result) {
          setResult(result)
          setShowNotification(true)
        }
      } catch (error) {
        console.error(error)
        setResult({
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error',
          message: 'Something went wrong'
        })
      }
    })
  }

  return [result, isLoading, executeAction, showNotification] as const
}

export { useAction }
