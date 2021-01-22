const initialState = {
    isLoggedIn: false,
    currentUser: {
        firstname: '',
        lastname: '',
        email: ''
    }
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGOUT':
            return initialState
        case 'LOGIN':{
            return {
                ...state,
                currentUser: action.user
            }
        }
        case 'UPDATE_CURRENT_USER':{
            return {
                ...state,
                currentUser: action.user
            }
        }
        default:
            return state;
  
    }
};
export default userReducer;