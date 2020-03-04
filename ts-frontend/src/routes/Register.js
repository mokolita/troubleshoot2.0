import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userPostFetch} from '../actions/userActions';

class Signup extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.userPostFetch(this.state)
  }

  render() {
    return (
        <div>
            <div className="bg-contact3">
            
            <div className="container-contact3">
                <div className="wrap-contact3">
                <form className="contact3-form validate-form" id="signup-form" onSubmit={this.handleSubmit}>
                    <span className="contact3-form-title">
                    Sign UP
                    </span>
                
                    <div className="wrap-input3 validate-input" data-validate = "First name is required">
                    <input className="input3" type="text" name="first_name" placeholder="First Name" onChange={e =>this.setState({first_name: e.target.value})} required></input>
                    <span className="focus-input3"></span>
                    </div>

                    <div className="wrap-input3 validate-input" data-validate = "Last name is required">
                    <input className="input3" type="text" name="last_name" placeholder="Last Name" onChange={e =>this.setState({last_name: e.target.value})} required></input>
                    <span className="focus-input3"></span>
                    </div>

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
  userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Signup);