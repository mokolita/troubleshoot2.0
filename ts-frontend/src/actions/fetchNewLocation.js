
export const fetchNewLocation = data => {
    const token = localStorage.getItem('token')
    return (dispatch) => {
       fetch(`http://localhost:3000/locations`,{
           method: "POST",
           headers: {
               'Content-Type': 'application/json',
               'Authorization': `${token}` },
           body: JSON.stringify(data)
       })
        .then(res => res.json())
        .then(location => {
            dispatch({type: 'NEW_LOCATION', location});
        })
        
    }}

