import React from 'react';
import { connect } from 'react-redux'
 
const styling = {
  marginTop: '200px'
}
class Profile extends React.Component {

  componentDidMount(){

  }
  render() {
    return <div style={styling}>
    <h1>Profile!</h1>
    </div>
  }
 
}
const mapStateToProps = (state) => {
  return {user: state.user}
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Profile)