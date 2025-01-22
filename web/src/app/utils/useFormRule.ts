'use client'
import { FormInstance, FormRule } from 'antd'
import { z } from 'zod'
import { useCallback } from 'react'

const useFormRule = <T = unknown>(schema: z.ZodType<T>) =>
  useCallback(
    ({ getFieldsValue }: FormInstance) => ({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      validator: async ({ field }) => {
        const result = await schema.safeParseAsync(getFieldsValue())
        const error =
          !result.success &&
          result.error.issues.filter((issue) => issue.path.includes(field))[0]
            ?.message
        return error ? Promise.reject(error) : Promise.resolve()
      }
    }),
    [schema]
  ) as FormRule
export { useFormRule }
