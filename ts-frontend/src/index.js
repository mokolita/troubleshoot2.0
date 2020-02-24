import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './reactStuff/serviceWorker';
import './styles/style.css'
import WebFont from  'webfontloader'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer, applyMiddleware(thunk))

WebFont.load({
    google: {
        families: ['Barlow:300,400,700', 'sans-serif', 'Arvo:300', 'serif']
    }
})

ReactDOM.render(
    <Provider store={store}>  
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();