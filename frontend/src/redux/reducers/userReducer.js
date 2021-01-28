import {LOGIN_SUCCESS, LOGIN_FAILURE, UPDATE_CURRENT_USER, LOGOUT, ADD_FETCHED_USERS} from '../actionTypes'


const initialState = {
    isLoggedIn: true,
    isStoreManager: false,
    allUsers: [],
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
                currentUser: action.payload.currentUser
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