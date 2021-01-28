import {LOGIN_SUCCESS, LOGIN_FAILURE, UPDATE_CURRENT_USER, LOGOUT} from '../actionTypes'


const initialState = {
    isLoggedIn: true,
    isStoreManager: false,
    currentUser: {
            id: 2,
            firstname: 'Zack',
            lastname: 'Jordan',
            email: 'demo@gmail.com'
        }
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:{
            return {
                isLoggedIn: true,
                isStoreManager: action.payload.isStoreManager,
                currentUser: action.payload.user
            }
        }
        case LOGIN_FAILURE: {
            return initialState;
        }   
        case UPDATE_CURRENT_USER:{
            return {
                ...state,
                isLoggedIn: true,
                isStoreManager: action.payload.isStoreManager,
                currentUser: action.payload.user
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