import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import App from './App';
import Products from './container/Products';
import Register from './container/Register';
import Login from './container/Login';
import './css/index.css';
import './js/Event.js';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
            <IndexRoute component={Products}></IndexRoute>
            <Route path="register" component={Register}></Route>
            <Route path="login" component={Login}></Route>
    	</Route>
    </Router>,
  document.getElementById('root')
);