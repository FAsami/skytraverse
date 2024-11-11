import { gql } from 'graphql-request'

export const GET_BRAND_INFO = gql`
  query GetBrand($title: String!) {
    brand_brands(where: { title: { _eq: $title } }) {
      id
      title
      logo
      metaData
      phone
      email
      location
    }
  }
`

export const GET_USER = gql`
  query GetUser($where: users_bool_exp!) {
    users(where: $where, limit: 1) {
      id
      email
      image
      name
      password
      phone
      emailVerified
      phoneVerified
      accounts {
        provider
      }
    }
  }
`

export const SESSION_TOKEN_BY_PK = gql`
  query SessionTokenByPk($sessionToken: String!) {
    sessions_by_pk(sessionToken: $sessionToken) {
      sessionToken
      userId
      expires
    }
  }
`

export const GET_OTP_BY_USER_ID = gql`
  query GetOtpByUserId($userId: uuid!, $tokenType: String = "OTP") {
    otp(
      where: {
        userId: { _eq: $userId }
        isValid: { _eq: true }
        tokenType: { _eq: $tokenType }
      }
      order_by: { created_at: desc }
    ) {
      id
      token
      created_at
      updated_at
      userId
      isValid
    }
  }
`

export const GET_FLIGHT_BOOKINGS = gql`
  query GetFlightBookings($where: booking_flights_bool_exp = {}) {
    booking_flights(where: $where, order_by: { id: desc }) {
      id
      provider
      providerOfferId
      providerOfferDetails
      providerOrderDetails
      status
      userId
      paymentMethod {
        id
        logo
        label
      }
    }
  }
`
export const GET_AVAILABLE_PAYMENT_METHODS = gql`
  query GetAvailablePaymentMethods {
    payment_availablePaymentMethods(where: { isActive: { _eq: true } }) {
      isActive
      id
      label
      logo
      title
    }
  }
`

export const GET_CUSTOMER_DETAILS_BY_USER_ID = gql`
  query GetCustomerDetails($userId: uuid!) {
    customer_details(where: { userId: { _eq: $userId } }) {
      id
      dateOfBirth
      identityDocuments
      firstName
      lastName
      gender
      avatar
    }
  }
`
