import {useState} from 'react'

function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('')
    const userToken = JSON.parse(tokenString)
    return userToken?.token 
    /**  _?._ optional chaining operator to prevent returning undefined **/
  }

  const [token, setToken] = useState(getToken())

  const saveToken = userToken => {
    localStorage.setItem('token',token.auth_key)
    setToken(userToken.token)
  }
  
  return ({
    setToken: saveToken,
    token
  })
}
export default useToken