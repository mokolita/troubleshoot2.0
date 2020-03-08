import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Location from '../_components/profileLocations'
 
const styling = {
  marginTop: '50px',
  marginLeft: '10px'
 }

class Profile extends React.Component {

  constructor(props){
    super(props)
  this.state = {
    user: this.props.users.user
  }
  }

  componentDidMount(){
    this.setState({
      user: this.props.users.user
    }) 
  }

  render() {
    const mappedUserLocations = this.props.users.user.locations.map(l =>
       <Location name={l.name} 
        id={l.id} 
        key={l.id} 
        content={l.content}
        address={l.address} 
        user_id={this.props.users.user.id}
        updateLocation={this.updateLocation}/> 
       )


    return <div style={styling}>
            <div className="container-contact3-form-btn">
              <Link className="contact3-form-btn" 
              to={{
                pathname: `users/${this.props.users.user.id}/locations/new`,
                state: {
                  user_id: this.props.users.user.id
                }}}> 
              Add New Location
              </Link>
            </div>
            {mappedUserLocations}
          </div>
  }
 
}

const mapState = ({users}) => ({users})

 
export default connect(mapState)(Profile)