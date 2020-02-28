import React from 'react';
import { connect } from 'react-redux'

import Location from '../presentationalComponents/profileLocations'
 
const styling = {
  marginTop: '200px'
}
class Profile extends React.Component {

  componentDidMount(){

  }

  render() {
    
    const mappedUserLocations = this.props.user.locations.map(l => <Location name={l.name} key={l.id} content={l.content}/>)

    return <div style={styling}>
      <button>Add New Location</button>
      {mappedUserLocations}
    </div>
  }
 
}

 
export default connect(state => ({user: state.authentication.user}))(Profile)