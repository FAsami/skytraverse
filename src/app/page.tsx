import Image from 'next/image'
import { FlightSearch } from './flights/components/FlightSearch'
import clsx from 'clsx'
import { Destination } from './components/home/Destination'
import { Testimonials } from './components/home/Testminial'
import { Airlines } from './components/home/Airlines'
import { FlightOffers } from './components/home/Offers'

const HomePage = async () => {
  try {
    return (
      <div>
        <div className="relative">
          <div className="flex flex-col items-center justify-center py-8 md:py-12">
            <h1 className="text-5xl px-6 text-center md:text-5xl font-semibold z-50 text-white">
              Where you wanna travel next ?
            </h1>
          </div>
          <div className="absolute inset-0">
            <Image
              src="/images/banner-top.png"
              alt="Background Image"
              layout="fill"
              objectFit="cover"
              className="z-0"
            />
          </div>
          <div className="backdrop-blur-[1px] pb-12 px-1">
            <FlightSearch />
          </div>
        </div>
        <FlightOffers />
        <div className="py-6">
          <Destination />
        </div>
        <div>
          <Airlines />
        </div>
        <div className="py-6">
          <Testimonials />
        </div>
      </div>
    )
  } catch (error) {
    console.log(error)
    throw new Error('Something went wrong !')
  }
}
export default HomePage
