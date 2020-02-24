import React from 'react';
import { connect } from 'react-redux'
import { fetchUser } from '../actions/fetchUser'
import '../styles/main.css'
import '../styles/style.css'
 

 class Login extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        email: '',
        password: ''
      }

      // this.handleChange = this.handleChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);
    }

  async handleSubmit(e){
    e.preventDefault()
    const [email, password] = Array.from(e.target.querySelectorAll('input')).map(i => i.value)
    const params = {
        user: {email, password}
    }
    console.log(params)
    
    try{
     console.log(this.props.fetchUser(params))
    }catch(err){
      console.log(err)
      //this.handleError(err)
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

  const mapStateToProps = ({user}) => ({user})

  const mapDispatchToProps = (dispatch) => {
    return {fetchUser: (params) => dispatch(fetchUser(params))}
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Login)