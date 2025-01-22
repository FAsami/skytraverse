import { getAirlines } from '@/app/flights/actions/getAirlines'
import { Airline } from '@duffel/api/types'
import Image from 'next/image'

export const Airlines = async () => {
  const result = await getAirlines()
  const airlines = result?.data?.data?.filter(
    (node: Airline) => node.logo_symbol_url
  ) as Airline[]
  if (!airlines.length) return null

  return (
    <div className="max-w-screen-2xl mx-auto mt-16 md:mt-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl w-full md:text-4xl text-center font-semibold">
          Search Top Airlines
        </h1>{' '}
        <h2 className="px-4 text-sm mx-auto w-full max-w-screen-sm text-gray-400 text-center mt-4 font-medium">
          Skytraverse intuitive platform connects you to leading airlines
          effortlessly. Experience a smooth and enjoyable journey to any
          destination while securing tickets from top airlines with ease.
        </h2>
      </div>
      <div className="grid px-4 container mx-auto  w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {airlines.map((airline) => (
          <div
            key={airline.id}
            className="h-auto w-full p-4 flex items-center justify-between hover:bg-muted group rounded bg-neutral-50 transform transition-transform duration-200 hover:scale-105"
          >
            <div className="flex items-center w-full gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src={airline.logo_symbol_url!}
                  alt={`${airline.name} logo`}
                  width={40}
                  height={40}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="font-medium text-sm text-neutral-600">
                {airline.name}
              </span>
            </div>
          </div>
        ))}
        <div className="h-auto w-full p-4 flex items-center justify-between hover:bg-muted group rounded bg-neutral-50">
          <div className="flex items-center w-full gap-3">
            <div className="w-full flex text-sm items-start justify-center gap-2 text-neutral-700 font-semibold">
              + More{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
