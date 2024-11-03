'use client'
import { Offer } from '@duffel/api/types'
import { Tooltip, Modal, Collapse } from 'antd'
import { FaChevronDown, FaChevronUp, FaInfoCircle } from 'react-icons/fa'
import moment from 'moment'
import { useTimer } from 'react-timer-hook'
import Link from 'next/link'
import { CiSearch, CiWarning } from 'react-icons/ci'
import { FaArrowRightLong } from 'react-icons/fa6'
import { formatCurrency } from '@/app/utils/formatCurrency'
import { BsClock } from 'react-icons/bs'

const { Panel } = Collapse

export const BillingDetails = ({ offer }: { offer: Offer }) => {
  const { seconds, minutes, isRunning } = useTimer({
    expiryTimestamp: new Date(offer.expires_at),
    onExpire: () => {
      Modal.warn({
        title: null,
        icon: null,
        content: (
          <div className="flex flex-col items-center justify-center py-12">
            <CiWarning className="text-red-500 text-6xl mb-2" />
            <p className="text-xl text-neutral-600 font-semibold">
              Session has expired
            </p>
            <p className="text-ms px-12 mt-2 text-neutral-500 text-center">
              This offer can&apos;t be availed at this moment. Please go back to
              the home page and search for another offer.
            </p>
            <Link
              href="/"
              className="mt-6 gap-2 text-xl relative flex items-center justify-center px-8 py-2 rounded-full transition-all duration-200 focus:outline-none"
            >
              Return home <FaArrowRightLong />
            </Link>
          </div>
        ),
        footer: null,
        closable: false
      })
    }
  })

  return (
    <div className="w-full md:w-1/3 mx-auto md:sticky top-4 space-y-4">
      <Collapse
        expandIconPosition="end"
        expandIcon={({ isActive }) =>
          isActive ? (
            <FaChevronDown className="text-neutral-700" />
          ) : (
            <FaChevronUp className="text-neutral-700" />
          )
        }
        defaultActiveKey={['1', '2']}
        ghost
      >
        {/* Session End Section */}
        <Panel
          key="1"
          header={
            <div className="flex items-center">
              <span className="text-base font-semibold text-neutral-700">
                Session ends at
              </span>
              <Tooltip
                placement="bottom"
                title="After this time, the offer will expire and no longer be usable to create an order"
              >
                <FaInfoCircle className="text-neutral-400 text-sm ml-2" />
              </Tooltip>
            </div>
          }
          className="bg-white p-4 rounded-md"
        >
          <div className="mt-4 text-center">
            <h3 className="font-semibold text-2xl text-neutral-700">
              {isRunning ? (
                <div className="flex items-center justify-center gap-2">
                  <BsClock className="text-xl" /> {minutes} : {seconds}
                </div>
              ) : (
                <div className="text-red-500 text-base">
                  <div className="flex items-center gap-1 justify-center">
                    <CiWarning /> Offer expired on <br />
                  </div>
                  <div className="text-neutral-500 text-xs font-light">
                    {moment(offer.expires_at).toString()}
                  </div>
                  <div className="text-neutral-500 gap-3 font-normal text-sm my-8 flex flex-col items-center justify-center">
                    <CiSearch className="text-3xl" />
                    <div>
                      Please{' '}
                      <Link href="/" className="text-blue-600">
                        search again
                      </Link>{' '}
                      to get the latest offers.
                    </div>
                  </div>
                </div>
              )}
            </h3>
          </div>
        </Panel>

        {/* Payment Details Section */}
        <Panel
          header={
            <div className="flex items-center">
              <span className="text-base font-semibold text-neutral-700">
                Payment details
              </span>
            </div>
          }
          key="2"
          className="bg-white p-4 rounded-md"
        >
          <div className="mt-4">
            <div className="font-medium text-sm inline-block border-b">
              Billing Details
            </div>
            <div className="space-y-1 pb-4 pt-2">
              <div className="text-neutral-500 text-sm flex items-center justify-between">
                <div>Base Amount</div>
                <div>
                  {formatCurrency(+offer.base_amount, offer.base_currency)}
                </div>
              </div>
              {offer.tax_amount && (
                <div className="text-neutral-500 text-sm flex items-center justify-between">
                  <div>Tax Amount</div>
                  <div>
                    {formatCurrency(+offer.tax_amount, offer.base_currency)}
                  </div>
                </div>
              )}
            </div>
            <div className="text-neutral-600 font-semibold py-1 mb-[-1rem] pb-4 bg-primary-50 flex items-center justify-between">
              <div>Total</div>
              <div>
                {formatCurrency(+offer.total_amount, offer.total_currency)}
              </div>
            </div>
          </div>
        </Panel>
      </Collapse>
    </div>
  )
}

export default BillingDetails
