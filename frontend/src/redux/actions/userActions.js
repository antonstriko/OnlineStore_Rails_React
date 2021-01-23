import {LOGIN_SUCCESS, LOGIN_FAILURE, UPDATE_CURRENT_USER, LOGOUT} from '../actionTypes'

export const loginSuccess = () => {
  return {
      type: LOGIN_SUCCESS,
      payload: user
  }
}

export const loginFailure = () => {
  debugger
  return {
      type: LOGIN_FAILURE
  }
}
export const updateCurrentUser = (user) => {
  return {
      type: UPDATE_CURRENT_USER,
      payload: user
  }
}

export const logout = () => {
  return {
      type: LOGOUT
  }
}