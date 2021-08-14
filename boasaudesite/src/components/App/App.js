import React from 'react';
import { BrowserRouter, Redirect, Route, Router, Switch } from 'react-router-dom';
import useToken from './useToken';
import Login from '../Login/login.js';
import Home from '../Home/home';
import Sobre from '../Sobre/sobre';

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/sobre" component={Sobre} />
        </Switch>
    </ BrowserRouter>

  )
}

export default App;
