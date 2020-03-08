export default function deleteLocation(id) {
  const token = localStorage.getItem('token')
return (dispatch) => {
   fetch(`http://localhost:3000/locations/${id}`,{
    method: "DELETE",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}` },
    body: JSON.stringify(id)
   })
   .then(response => {
    dispatch({type: 'DELETE_LOCATION', id: {id}})
  })        
  .then(() => {
      this.props.history.push('/')
  })
  .catch(error => {
      throw(error)
  })

}}