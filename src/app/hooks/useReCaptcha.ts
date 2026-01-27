// import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

const useReCaptcha = () => {
  // const { executeRecaptcha } = useGoogleReCaptcha()

  const verifyReCaptcha = async (action: string) => {
    console.log('====>', action)
    // TODO: Should be resolved after intial deployment
    return true

    // if (!executeRecaptcha) {
    //   return false
    // }
    // try {
    //   const { data } = await axios.post('/api/auth/re-captcha', {
    //     gRecaptchaToken: await executeRecaptcha(action)
    //   })
    //   console.log('====>', data.success)
    //   return data.success
    // } catch (error) {
    //   console.log('====>', error)
    //   console.error(error)
    //   return false
    // }
  }

  return { verifyReCaptcha }
}
export { useReCaptcha }
