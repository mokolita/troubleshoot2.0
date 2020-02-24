import React from 'react';
import { connect } from 'react-redux'

const styling = {
  marginTop: '200px'
}
 
class Signup extends React.Component {
  
  render() {
    return <div style={styling}>
      <h1>signup!</h1>
      </div>
  }
}
 
export default connect()(Signup)