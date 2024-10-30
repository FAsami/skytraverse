import { Duffel } from '@duffel/api'

const token = process.env.DUFFEL_API_TOKEN
console.log(token)

if (!token) {
  throw new Error(
    'DUFFEL_API_TOKEN is not defined in the environment variables'
  )
}
const duffelClient = new Duffel({ apiVersion: 'v2', token })

export { duffelClient }
