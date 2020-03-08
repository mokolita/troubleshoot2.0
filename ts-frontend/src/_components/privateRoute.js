import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// const authenticate = {
//     isAuthenticated: false,
//     authenticate: {
        
//     }
// }

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
            localStorage.token
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)