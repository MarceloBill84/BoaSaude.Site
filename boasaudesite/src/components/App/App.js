import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../Login/login.js';
import Sobre from '../Sobre/sobre';

export default function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/sobre" component={Sobre} />
        </Switch>
    </ BrowserRouter>
  )
}