export const userPostFetch = user => {
  return dispatch => {
    return fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({user})
    })
      .then(resp => {
          return(
          localStorage.setItem('token', resp.headers.get('authorization')),
          resp.json()
          )})
      .then(data => {
        if (data.message) {
         throw(data.message)
        } else {
          dispatch(loginUser(data))
        }
      })
  }
}

export const userLoginFetch = user => {
  return dispatch => {
    return fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({user})
    })
      .then(resp => {
          return(
          localStorage.setItem('token', resp.headers.get('authorization')),
         resp.json()
          )})
      .then(data => {
        if (data.message) {
          throw(data.message)
        } else {
          dispatch(loginUser(data))
          
        }
      })
  }
}

export const getProfileFetch = () => {
  return dispatch => {
    const token = localStorage.token;
    if (token) {
      return fetch("http://localhost:3000/profile", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
           Accept: 'application/json',
          'Authorization': `${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
         if (data.message) {
            // An error will occur if the token is invalid.
            // If this happens, you may want to remove the invalid token.
            localStorage.removeItem("token")
          } else {
            console.log(data)
            dispatch(loginUser(data))
          }
        })
    }
  }
}

const loginUser = userObj => ({    
  type: 'LOGIN_USER',
  user: userObj
})

export const logoutUser = () => ({
type: 'LOGOUT_USER'
})