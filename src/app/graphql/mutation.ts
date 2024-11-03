import { gql } from 'graphql-request'

const CREATE_USER = gql`
  mutation InsertUsers($object: users_insert_input!) {
    insert_users_one(object: $object) {
      id
      emailVerified
      email
      created_at
      image
      name
      password
      phone
      phoneVerified
      updated_at
    }
  }
`

const CREATE_OTP = gql`
  mutation INSERT_OTP($object: otp_insert_input!) {
    insert_otp_one(object: $object) {
      created_at
    }
  }
`
const DELETE_OTP_BY_USER_ID = gql`
  mutation DeleteOTP($userId: uuid!, $tokenType: String = "OTP") {
    delete_otp(
      where: { userId: { _eq: $userId }, tokenType: { _eq: $tokenType } }
    ) {
      affected_rows
    }
  }
`

const UPDATE_USER_BY_ID = gql`
  mutation UpdateUser($_set: users_set_input!, $userId: uuid!) {
    update_users_by_pk(_set: $_set, pk_columns: { id: $userId }) {
      updated_at
    }
  }
`

const CREATE_FLIGHT_BOOKING = gql`
  mutation CreateFlightBooking($object: booking_flights_insert_input = {}) {
    insert_booking_flights_one(object: $object) {
      id
      meta
      status
    }
  }
`

const UPDATE_FLIGHT_BOOKING = gql`
  mutation UpdateFlightBooking(
    $where: booking_flights_bool_exp = {}
    $_set: booking_flights_set_input = {}
  ) {
    update_booking_flights(where: $where, _set: $_set) {
      affected_rows
      returning {
        id
      }
    }
  }
`

export {
  CREATE_USER,
  UPDATE_USER_BY_ID,
  CREATE_OTP,
  DELETE_OTP_BY_USER_ID,
  CREATE_FLIGHT_BOOKING,
  UPDATE_FLIGHT_BOOKING
}
