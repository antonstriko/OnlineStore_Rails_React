import {LOGIN_SUCCESS, LOGIN_FAILURE, UPDATE_CURRENT_USER, LOGOUT, ADD_FETCHED_USERS} from '../actionTypes'


const initialState = {
    isLoggedIn: false,
    allUsers: [],
    isStoreManager: false,
    favIds: [],
    favorites: [],
    reviews: [],
    currentUser: null
  }

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:{
            return {
                ...state,
                ...action.payload
            }
        }
        case ADD_FETCHED_USERS:{
            return {
                ...state,
                allUsers : action.payload
            }
        }
        case LOGIN_FAILURE: {
            return initialState;
        }   
        case UPDATE_CURRENT_USER:{
            return {
                ...state,
                ...action.payload
            }
        }
        case LOGOUT: {
            return initialState
        }
        default:
            return state;
  
    }
};
export default userReducer;