import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import NavbarContainer from './containers/navbarContainer'
import Home from './routes/Home'
import Profile from './routes/Profile'
import Login from './routes/Login'
import Signup from './routes/Register'
import locationForm from './_components/locationForm'
import { history } from './_helpers';
import { PrivateRoute } from './_components'
import {logoutUser} from './actions/userActions'


const body ={
  backgroundColor: '#e8e8e8',
  marginTop: '110px',
  display: 'flex'
}

class App extends React.Component {
  
  handleClick = event => {
    event.preventDefault()
    localStorage.removeItem("token")
    this.props.logoutUser()
    }
  
 render(){
  return (
    <>
      <Router history={history}>
        <div style={body}>
            <NavbarContainer />
            <Switch>
            <Route exact path='/' component={Home} />
            <PrivateRoute exact path='/profile' component={Profile} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route path='/locations/:locationID' component={locationForm}/>
            <Redirect from="*" to="/" />
            </Switch>
            <button onClick={this.handleOnClick}>Log Out</button>
        </div>

      </Router>
   </>
  );
}}


const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
})

export default connect(null, mapDispatchToProps)(App);



