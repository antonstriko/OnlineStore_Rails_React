import {LOGIN_SUCCESS, LOGIN_FAILURE, UPDATE_CURRENT_USER, LOGOUT, ADD_FETCHED_USERS, ADD_FAVORITE, REMOVE_FAVORITE} from '../actionTypes'


const initialState = {
    isLoggedIn: false,
    allUsers: [],
    isStoreManager: false,
    favIds: [],
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
        case ADD_FAVORITE:{
            return {
                ...state,
                favIds: [...state.favIds, action.payload]
            }
        }
        case REMOVE_FAVORITE:{
            return {
                ...state,
                favIds : state.favIds.filter(favorite => favorite !== action.payload)
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