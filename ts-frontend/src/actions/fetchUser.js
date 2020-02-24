export function fetchUser(user) {
    return (dispatch) => {
       dispatch({type: 'START_ADDING_USER' })
       fetch(`http://localhost:3000/login`, {
           method: "POST",
           headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
             'Authorization': `Bearer ${token}`
           },
           body: JSON.stringify(user)

       })
        .then(res => console.log(res.json()))
        .then(user => dispatch({type: 'ADD_USER', user}))
  
    }}

   