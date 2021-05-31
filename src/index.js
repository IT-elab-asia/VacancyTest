import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import App from './App';
import Home from './Home';
import Login from './Login';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/login' component={Login} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
