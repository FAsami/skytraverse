import { useAction } from '@/app/hooks/useAction'
import { CreateOfferRequest } from '@duffel/api/types'
import { createOfferRequest } from '../../actions/createOfferRequest'
import { Button } from 'antd'
import { FaSearch } from 'react-icons/fa'
import { CSSTransition } from 'react-transition-group'
import { StatusMessage } from '@/app/components/StatusMessage'

const SearchFlightButton = ({
  offerRequest
}: {
  offerRequest: CreateOfferRequest
}) => {
  const [result, isLoading, executeAction, notification] = useAction(
    async () => await createOfferRequest(offerRequest)
  )

  return (
    <div>
      <div className="flex justify-center  mt-6 relative">
        <Button
          loading={isLoading}
          onClick={executeAction}
          type="primary"
          size="large"
          shape="round"
          icon={<FaSearch />}
        >
          Search flight
        </Button>
      </div>
      <CSSTransition
        in={notification}
        timeout={{ enter: 500, exit: 500 }}
        classNames={{
          enter: 'animate__animated animate__fadeIn animate__faster',
          exit: 'animate__animated animate__fadeOut'
        }}
        unmountOnExit
      >
        <div className="flex justify-center pt-1">
          <StatusMessage
            message={result.message}
            success={result.success}
            visible={notification}
          />
        </div>
      </CSSTransition>
    </div>
  )
}

export { SearchFlightButton }
