import { LOGOUT, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actionTypes';
import { userService } from '../../_services/user_service';
import { history } from '../../_services/history';

export const userActions = {
    login,
    logout,
    getAll
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: LOGIN_REQUEST, user } }
    function success(user) { return { type: LOGIN_SUCCESS, user } }
    function failure(error) { return { type: LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => {
                  return;
                    // dispatch(failure(error));
                    // dispatch(alertActions.error(error))
                }
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}



// export const login = (user) => {
//   return {
//       type: 'LOGIN',
//       user: user
//   }
// }

// export const logout = (user) => {
//   return {
//       type: 'LOGOUT',
//       user: user
//   }
// }
// export const signupNewUser = (user) => {
//   return {
//       type: 'SIGNUP',
//       user: user
//   }
// }

// export const getUsers = (users) => {
//   return {
//       type: 'GET_USERS',
//       users: users
//   }
// }