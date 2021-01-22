
import authHeader from './auth-header';

export const userService = {
    login,
    logout,
    getAll
};

const apiUrl = 'http://localhost:3000';
// {
//     "user": {
    //     "id": 1,
    //     "email": "euberman@gmail.com",
    //     "password_digest": "$2a$12$SYsNt//f6SsoJiiaWODHc.4K7WJUNHhKjoujVYlzllBcxG3KUrumW",
    //     "firstname": "Eric",
    //     "lastname": "Uberman",
    //     "isStoreManager": true,
    //     "created_at": "2021-01-21T21:44:54.548Z",
    //     "updated_at": "2021-01-21T21:44:54.548Z"
//     },
//     "token": "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.g0U5SAOLozk3dz0mNUrvBSR-0CSewJ5eParRWg_abVk"
//  }
function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch('http://localhost:3000/login', requestOptions)
        .then(handleResponse)
        .then(data => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            let user;
            if (data.user && data.token){
                user = data.user;
                user.token = data.token;
            }
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getUser(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${apiUrl}/users/${id}`, requestOptions)
            .then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}