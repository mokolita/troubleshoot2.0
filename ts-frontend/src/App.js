import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import NavbarContainer from './containers/navbarContainer'
import Home from './routes/Home'
import Profile from './routes/Profile'
import Login from './routes/Login'
import Signup from './routes/Register'
import LocationForm from './_components/locationForm'
import NewLocationForm from './_components/newLocationForm'
import DeleteLocation from './actions/deleteLocation'
import { history } from './_helpers';
import { PrivateRoute } from './_components'
import {logoutUser} from './actions/userActions'
import { getProfileFetch } from './actions/userActions'


const body ={
  backgroundColor: '#e8e8e8',
  marginTop: '110px',
  display: 'flex'
}

class App extends React.Component {

  componentDidMount(){
    this.props.getProfileFetch()
  }
  
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
            <Route exact path='/users/:userid/locations/new' component={NewLocationForm} />
            <Route exact path='/users/:userid/locations/:locationid/edit' component={LocationForm} />
            <Route exact path='/users/:userID/locations/:locationID' component={DeleteLocation} />
            </Switch>
            
        </div>

      </Router>
   </>
  );
}}


const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser()),
  getProfileFetch: () => dispatch(getProfileFetch())
})

export default connect(null, mapDispatchToProps)(App)