import React from 'react';
import { connect } from 'react-redux'

import Location from '../presentationalComponents/profileLocations'
 
const styling = {
  marginTop: '200px'
}
class Profile extends React.Component {

  constructor(props){
    super(props)
    this.updateLocation = this.updateLocation.bind(this)
  }

  componentDidMount(){

  }

  updateLocation = (e) => {
    e.preventDefault()
   console.log('updateLocation in Profile')
    
  }

  render() {
   
    
    const mappedUserLocations = this.props.user.locations.map(l =>
       <Location name={l.name} 
        id={l.id} 
        key={l.id} 
        content={l.content} 
        user_id={this.props.user.id}
        updateLocation={this.updateLocation}/> 
       )

    return <div style={styling}>
      <button>Add New Location</button>
      {mappedUserLocations}
    </div>
  }
 
}

const mapState = (state) => {
  return{
    user: state.authentication.user,
    updating: false
  }
  
}

 
export default connect(mapState)(Profile)