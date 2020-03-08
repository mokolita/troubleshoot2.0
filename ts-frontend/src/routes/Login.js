import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom'
import {userLoginFetch} from '../actions/userActions';
import '../styles/style.css'
import '../styles/main.css'


class Login extends Component {
  state = {
    email: "",
    password: "",
    toProfile: false
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.userLoginFetch(this.state)
      .then(() => this.setState(() => ({
        toProfile: true
      })))
  } 

  render() {
    if (this.state.toProfile === true) {
      return <Redirect to='/profile' />
    }

    return( 
    <div>
        <div className="bg-contact3">
       
        <div className="container-contact3">
          <div className="wrap-contact3">
            <form className="contact3-form validate-form" id="login-form" onSubmit={this.handleSubmit}>
              <span className="contact3-form-title">
                Login
              </span>
      
              <div className="wrap-input3 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                <input className="input3" type="text" name="email" placeholder="Your Email" onChange={e =>this.setState({email: e.target.value})} required></input>
                <span className="focus-input3"></span>
              </div>
      
              <div className="wrap-input3 validate-input" data-validate = "Password is required">
                  <input className="input3" type="password" name="password" id="password" placeholder="Password" onChange={e => this.setState({password: e.target.value})}required></input>
                  <span className="focus-input3"></span>
                </div>
      
              <div className="container-contact3-form-btn">
                <button className="contact3-form-btn" >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    )}
  }


const mapDispatchToProps = dispatch => ({
  userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo)),
})

export default withRouter(connect(null, mapDispatchToProps)(Login))

  