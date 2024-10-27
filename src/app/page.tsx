const HomePage = async () => {
  try {
    return <div>Hello</div>
  } catch (error) {
    console.log(error)
    throw new Error('Something went wrong !')
  }
}
export default HomePage
