import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavbarContainer from './containers/navbarContainer'
import Home from './routes/Home'
import Profile from './routes/Profile'
import Login from './routes/Login'
import Signup from './routes/Signup'

//import { connect } from 'redux'


function App() {
  const body ={
    backgroundColor: '#e8e8e8',
    marginTop: '110px',
    display: 'flex'
  }
  return (
    <>
      <Router>
        <div style={body}>
            <NavbarContainer />
            <Route exact path='/' component={Home} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />

        </div>

      </Router>
   </>
  );
}

export default App;
