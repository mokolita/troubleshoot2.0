import { authHeader } from '../_helpers/authHeader'


export const fetchUpdateLocations = data => {
    const id = data.id
    return (dispatch) => {
       fetch(`http://localhost:3000/locations/${id}`,{
           method: "PUT",
           headers: { ...authHeader(), 'Content-Type': 'application/json' },
           body: JSON.stringify(data)
       })
        .then(res => console.log(res.json()))
        .then(location => dispatch({type: 'UPDATE_LOCATION', location}))
  
    }}