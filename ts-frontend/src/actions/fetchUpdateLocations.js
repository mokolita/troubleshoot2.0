

export const fetchUpdateLocations = data => {
    const id = data.id
    const token = localStorage.getItem('token')
    console.log(token)
    return (dispatch) => {
       fetch(`http://localhost:3000/locations/${id}`,{
           method: "PUT",
           headers: {
               'Content-Type': 'application/json',
               'Authorization': `${token}` },
           body: JSON.stringify(data)
       })
        .then(res => res.json())
        .then(location => dispatch({type: 'UPDATE_LOCATION', location}))
  
    }}