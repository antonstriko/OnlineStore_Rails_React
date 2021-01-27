import Api from "../api"

export const loadUsers = () => dispatch => {   
  dispatch({ type: LOAD_USERS_LOADING });
  Api.getUsers()       
  .then(response => response.json())       
  .then(           
    data => dispatch({ type: LOAD_USERS_SUCCESS, data }),           
    error => dispatch({ type: LOAD_USERS_ERROR, error: error.message || 'Unexpected Error!!!' })       
  )
};