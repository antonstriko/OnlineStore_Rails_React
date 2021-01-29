import {LOGIN_SUCCESS, LOGIN_FAILURE, UPDATE_CURRENT_USER, LOGOUT, ADD_FETCHED_USERS} from '../actionTypes'

// export const loginSuccess = (user) => {
//   return {
//       type: LOGIN_SUCCESS,
//       payload: {
//         isLoggedIn: true,
//         isStoreManager: user.isStoreManager,
//         user: {
//           id: user.id,
//           firstname: user.firstname,
//           lastname: user.lastname,
//           email: user.email
//         }
//       }
//   }
// }
export const loginSuccess = (user) => {
  return {
      type: LOGIN_SUCCESS,
      payload: {
        isLoggedIn: true,
        isStoreManager: user.isStoreManager,
        currentUser: {
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          favorites: user.favorites || null,
          reviews: user.reviews || null
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
      // address: {
      //   street: user?.address_street,
      //   city:user?.address_city,
      //   state:user?.address_state,
      //   zip:user?.address_zip
      // }
    // }
    // user.address = user.address && Object.keys(user.address).length > 1 ? currentAddress : null
    // localStorage.setItem('user', user.id)
    return {
      type: UPDATE_CURRENT_USER,
      payload: {
        isLoggenIn: true,
        isStoreManager: user.isStoreManager,
        user: {
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
// // actions/fetchAstronauts.js
// export function fetchAstronauts() {
//   return (dispatch) => {
//     dispatch({ type: 'START_ADDING_ASTRONAUTS_REQUEST' });
//     fetch('http://api.open-notify.org/astros.json')
//       .then(response => response.json())
//       .then(astronauts => dispatch({ type: 'ADD_ASTRONAUTS', astronauts }));
//   };
// }