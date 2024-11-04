'use client'
import clsx from 'clsx'
import { BiCheckCircle, BiErrorCircle } from 'react-icons/bi'
import { CSSTransition } from 'react-transition-group'

const StatusMessage = ({
  message,
  success,
  visible
}: {
  message: string
  success: boolean
  visible: boolean
}) => {
  return (
    <CSSTransition
      in={visible}
      timeout={{ enter: 500, exit: 500 }}
      classNames={{
        enter: 'animate__animated animate__fadeIn animate__faster',
        exit: 'animate__animated animate__fadeOut'
      }}
      unmountOnExit
    >
      <div
        className={clsx('text-red-500 text-sm mb-3 flex items-center gap-1', {
          success: 'text-green-500'
        })}
      >
        {success ? <BiCheckCircle /> : <BiErrorCircle />}
        <div>{message}</div>
      </div>
    </CSSTransition>
  )
}

export { StatusMessage }
