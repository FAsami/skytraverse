'use client'

import { Button, Modal } from 'antd'
import { MdClose, MdList, MdOutlineClose } from 'react-icons/md'
import { useState } from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { Offer } from '@duffel/api/types'
import { formatCurrency } from '@/app/utils/formatCurrency'
import moment from 'moment'

const DetailsModal = ({ offer }: { offer: Offer }) => {
  const [isVisible, setIsVisible] = useState(false)

  const showModal = () => {
    setIsVisible(true)
  }

  const handleOk = () => {
    setIsVisible(false)
  }

  const handleCancel = () => {
    setIsVisible(false)
  }
  return (
    <>
      <Button
        className="!pl-0"
        icon={<MdList />}
        type="link"
        onClick={showModal}
      >
        Details
      </Button>
      <Modal
        title="Details"
        open={isVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        centered={true}
        closeIcon={<MdClose />}
        footer={null}
      >
        <div className="space-y-3 py-4 h-[55vh] overflow-y-auto scrollbar-light">
          <div className="border-b w-full flex justify-between py-2 text-sm">
            <div className="text-sm text-neutral-800 flex items-center gap-1">
              Offer will expire on
            </div>
            <div className="text-neutral-500 text-sm">
              {moment(new Date(offer.expires_at)).format('MMM DD,HH:mm')}
            </div>
          </div>
          <div className="border-b w-full flex justify-between py-2 text-sm">
            <div className="text-sm text-neutral-800 flex items-center gap-1">
              {offer?.conditions?.change_before_departure?.allowed ? (
                <BsFillCheckCircleFill className="text-green-700 text-sm" />
              ) : (
                <MdOutlineClose className="text-red-700" />
              )}
              Change before departure
            </div>
            <div className="text-neutral-500 text-sm">
              {offer?.conditions?.change_before_departure?.penalty_amount
                ? `Penalty ${formatCurrency(
                    Number(
                      offer?.conditions?.change_before_departure?.penalty_amount
                    ),
                    offer?.conditions?.change_before_departure?.penalty_currency
                  )}`
                : 'not refundable'}
            </div>
          </div>
          <div className="border-b w-full flex justify-between py-2 text-sm">
            <div className="text-sm text-neutral-800 flex items-center gap-1">
              {offer?.conditions?.refund_before_departure?.allowed ? (
                <BsFillCheckCircleFill className="text-green-700" />
              ) : (
                <MdOutlineClose className="text-red-700 text-xl" />
              )}
              Refund before departure
            </div>
            <div className="text-neutral-500 text-sm">
              {offer?.conditions?.refund_before_departure?.penalty_amount
                ? `Penalty ${formatCurrency(
                    Number(
                      offer?.conditions?.refund_before_departure?.penalty_amount
                    ),
                    offer?.conditions?.refund_before_departure?.penalty_currency
                  )}`
                : 'not refundable'}
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            onClick={() => setIsVisible(false)}
            shape="round"
            type="primary"
          >
            Okay
          </Button>
        </div>
      </Modal>
    </>
  )
}

export { DetailsModal }
