import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import NavbarContainer from './containers/navbarContainer'
import Home from './routes/Home'
import Profile from './routes/Profile'
import Login from './routes/Login'
import Signup from './routes/Register'
import { history } from './_helpers';
import { alertActions } from './_actions';
import { PrivateRoute } from './_components'


const body ={
  backgroundColor: '#e8e8e8',
  marginTop: '110px',
  display: 'flex'
}

class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
        this.props.clearAlerts();
    });
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
            <Redirect from="*" to="/" />
            </Switch>
        </div>

      </Router>
   </>
  );
}
}
function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

export default connect(mapState, actionCreators)(App)
