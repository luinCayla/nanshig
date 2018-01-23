import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRedirect,hashHistory, Redirect} from 'react-router'

import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import './style/usage/app.scss';

import Home from './components/home';
import List from './components/list';
import Man from './components/man';
import Cart from './components/cart';
import Mall from './components/mall';

let routers = <Router history={hashHistory} > 
    <Route path="/" component={App}>
        <IndexRedirect to="home"/>
        <Route path="home" component={Home}/>
        <Route path="list" component={List}/>
        <Route path="man" component={Man}/>
        <Route path="cart" component={Cart}/>
        <Route path="mall" component={Mall}/>

        <Redirect from="*" to="home"/>
    </Route>


</Router>


ReactDOM.render(routers , document.getElementById('root'));
registerServiceWorker();
