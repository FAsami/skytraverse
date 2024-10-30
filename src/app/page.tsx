import { FlightSearch } from './flights/components/FlightSearch'

const HomePage = async () => {
  try {
    return (
      <div>
        <FlightSearch />
      </div>
    )
  } catch (error) {
    console.log(error)
    throw new Error('Something went wrong !')
  }
}
export default HomePage
