export function fetchLocations() {
  return (dispatch) => {
     dispatch({type: 'START_ADDING_LOCATIONS' })
     fetch('http://localhost:3000/locations')
      .then(res => res.json())
      .then(locations => dispatch({type: 'ADD_LOCATIONS', locations}))

  }}