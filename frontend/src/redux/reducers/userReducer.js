import {LOGIN_SUCCESS, LOGIN_FAILURE, UPDATE_CURRENT_USER, LOGOUT} from '../actionTypes'

const initialState = {
    isLoggedIn: false,
    currentUser: {
        id: '',
        firstname: '',
        lastname: '',
        email: '',
        isStoreManager: false
    }
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:{
            return {
                isLoggedIn: true,
                currentUser: action.user
            }
        }
        case LOGIN_FAILURE: {
            return initialState;
        }   
        case UPDATE_CURRENT_USER:{
            return {
                ...state,
                currentUser: action.user
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