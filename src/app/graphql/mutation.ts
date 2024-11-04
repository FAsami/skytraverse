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

const CREATE_PAYMENT_TRANSACTION = gql`
  mutation CreatePaymentTransaction(
    $object: payment_transactions_insert_input!
  ) {
    insert_payment_transactions_one(object: $object) {
      id
    }
  }
`
const UPDATE_PAYMENT_TRANSACTION = gql`
  mutation UpdatePaymentTransactionById(
    $_set: payment_transactions_set_input!
    $id: Int!
  ) {
    update_payment_transactions_by_pk(_set: $_set, pk_columns: { id: $id }) {
      id
    }
  }
`
const CREATE_PAYMENT_TRANSACTION_LOG = gql`
  mutation CreatePaymentTransactionLog(
    $object: payment_transactionLogs_insert_input!
  ) {
    insert_payment_transactionLogs_one(object: $object) {
      id
    }
  }
`

export {
  CREATE_USER,
  UPDATE_USER_BY_ID,
  CREATE_OTP,
  DELETE_OTP_BY_USER_ID,
  CREATE_FLIGHT_BOOKING,
  UPDATE_FLIGHT_BOOKING,
  CREATE_PAYMENT_TRANSACTION,
  UPDATE_PAYMENT_TRANSACTION,
  CREATE_PAYMENT_TRANSACTION_LOG
}
