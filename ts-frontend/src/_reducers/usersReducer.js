  
  export const usersReducer = (state = {user: {}}, action)  =>{
      switch (action.type) {
        case 'LOGIN_USER':
          return {...state, 
            user: action.user}
        case 'LOGOUT_USER':
          return {...state, user: {} }
        default:
          return state;
      }
    }