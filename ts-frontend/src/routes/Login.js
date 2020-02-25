import React from 'react';
import { connect } from 'react-redux'
import { userActions } from '../_actions';

import '../styles/main.css'
import '../styles/style.css'
 

 class Login extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    this.props.logout();

    this.state = {
        email: '',
        password: '',
        submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
}

handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { email, password } = this.state;
    if (email && password) {
        this.props.login(email, password);
    }
}

  render() {
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

  function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

  export default connect(mapState, actionCreators)(Login)