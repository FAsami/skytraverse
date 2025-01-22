import { Form, Input, Button } from 'antd'
import { z } from 'zod'
import { PhoneInput } from './PhoneInput'
import { useFormRule } from '@/app/utils'
import {
  AuthFormField,
  AuthFormProps,
  AuthPageIdentifier,
  AuthResponse
} from '@/types/authForm'
import { useEffect, useMemo, useState, useTransition } from 'react'
import { TbExchange } from 'react-icons/tb'
import Link from 'next/link'
import { BiCheckCircle, BiErrorCircle } from 'react-icons/bi'
import { useSearchParams } from 'next/navigation'
import { useReCaptcha } from '@/app/hooks'

const initial = {
  success: false,
  message: '',
  error: ''
}

const AuthForm = <TSchema extends z.ZodType<unknown>>({
  identifier,
  fields,
  schema,
  onFormSubmit,
  resendButton
}: AuthFormProps<TSchema>) => {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') ?? '/'
  const token = searchParams.get('token') ?? ''
  const [isPending, startTransition] = useTransition()
  const [result, setResult] = useState<AuthResponse>(initial)

  const { verifyReCaptcha } = useReCaptcha()
  const onFinish = async (values: z.infer<typeof schema>) => {
    setResult(initial)
    startTransition(async () => {
      const { success } = schema.safeParse(values)
      if (success) {
        const isVerified = await verifyReCaptcha(identifier)
        if (isVerified) {
          const result = await onFormSubmit(values, { callbackUrl, token })
          if (result) {
            setResult(result)
          }
        } else {
          setResult({
            success: false,
            error:
              'Please try again. If you continue to experience issues, please contact our support team for assistance.'
          })
        }
      }
    })
  }

  const [form] = Form.useForm()
  const [isPhoneVisible, setIsPhoneVisible] = useState<boolean>(false)

  const handleFinish = async (values: z.infer<TSchema>) => {
    onFinish(values)
  }

  const toggleInputType = () => {
    setIsPhoneVisible((prev) => !prev)
  }

  useEffect(() => {
    form.resetFields()
  }, [isPhoneVisible, form])

  return (
    <div>
      <Form
        form={form}
        initialValues={fields.reduce<Record<string, string>>((acc, node) => {
          acc[node.name] = node.initialValue
          return acc
        }, {})}
        onFinish={handleFinish}
        layout="vertical"
      >
        {fields.map((node) => (
          <FormItem
            identifier={identifier}
            key={node.name}
            isPhoneVisible={isPhoneVisible}
            node={node}
            schema={schema}
          />
        ))}
        {(identifier === 'login' || identifier === 'changePassword') && (
          <Link
            className="text-xs text-blue-500 text-right flex justify-end pb-3"
            href="/forgot-password"
          >
            Forgot password ?{' '}
          </Link>
        )}
        {identifier === 'verify' && resendButton}

        <Form.Item>
          <Button
            loading={isPending}
            type="primary"
            size="large"
            htmlType="submit"
            block
          >
            {buttonLabel[identifier]}
          </Button>
        </Form.Item>
      </Form>
      {result.error && (
        <div className="rounded-sm bg-red-100 text-red-400 text-sm font-semibold px-4 py-3 flex items-center justify-between">
          <div>{result.error}</div>
          <BiErrorCircle />
        </div>
      )}
      {result.success && (
        <div className="rounded-sm bg-green-100 text-green-400 text-sm font-semibold px-4 py-3 flex items-center justify-between">
          <div>{result.message}</div>
          <BiCheckCircle />
        </div>
      )}

      {['login', 'forgotPassword'].includes(identifier) && (
        <div className="flex justify-center mt-3">
          <button
            className="text-sm font-semibold text-left text-blue-600 flex justify-end items-center gap-1"
            onClick={toggleInputType}
          >
            <TbExchange />
            {isPhoneVisible
              ? 'Continue with Email'
              : 'Continue with phone number'}
          </button>
        </div>
      )}
    </div>
  )
}

const FormItem = ({
  identifier,
  node,
  isPhoneVisible,
  schema
}: {
  identifier: AuthPageIdentifier
  node: AuthFormField
  isPhoneVisible: boolean
  schema: z.ZodType<unknown>
}) => {
  const isFieldHidden = useMemo(() => {
    if (['login', 'forgotPassword'].includes(identifier)) {
      if (isPhoneVisible) {
        if (node.type === 'email') {
          return true
        }
      } else {
        if (node.type === 'phone') {
          return true
        }
      }
    }

    return false
  }, [isPhoneVisible, node.type, identifier])

  return (
    <Form.Item
      name={node.name}
      label={node.label}
      rules={[useFormRule(schema)]}
      hidden={node.hidden ? node.hidden : isFieldHidden}
    >
      {node.type === 'phone' ? (
        <PhoneInput />
      ) : node?.type === 'password' ? (
        <Input.Password prefix={node.icon} placeholder={node.placeholder} />
      ) : (
        <Input prefix={node.icon} placeholder={node.placeholder} />
      )}
    </Form.Item>
  )
}

export { AuthForm }

const buttonLabel: Record<AuthPageIdentifier, string> = {
  login: 'Sign In',
  register: 'Sign Up',
  forgotPassword: 'Reset Password',
  setPassword: 'Set Password',
  verify: 'Verify account',
  changePassword: 'Change password'
}
