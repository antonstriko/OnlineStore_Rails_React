import {LOGIN_SUCCESS, LOGIN_FAILURE, UPDATE_CURRENT_USER, LOGOUT, ADD_FETCHED_USERS} from '../actionTypes'


export const loginSuccess = (user) => {
  return {
      type: LOGIN_SUCCESS,
      payload: {
        isLoggedIn: true,
        isStoreManager: user.isStoreManager,
        favIds: user.fav_ids,
        favorites: user.favorites || [],
        reviews: user.reviews || [],
        currentUser: {
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email
        }
      }
  }
}

export const addFetchedUsers = (data) => {
  return {
      type: ADD_FETCHED_USERS,
      payload: data
  }
}

export const loginFailure = () => {
  return {
      type: LOGIN_FAILURE
  }
}

export const updateCurrentUser = (user) => {
  if (user) {
    // localStorage.setItem('user_id', user.id)
    return {
      type: UPDATE_CURRENT_USER,
      payload: {
        isLoggedIn: true,
        isStoreManager: user.isStoreManager,
        favIds: user.fav_ids,
        favorites: user.favorites || [],
        reviews: user.reviews || [],
        currentUser: {
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email
        }
      }
    }
  } 
    return null;
}



export const logout = () => {
  return {
      type: LOGOUT
  }
}