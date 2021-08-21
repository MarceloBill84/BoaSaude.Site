import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../Login/login.js';
import Menu from '../Provider/menu.js';
import AttendanceXManifestation from '../Provider/Reports/AttendanceXManifestation/attendanceXManifestation.js';

export default function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/provider/menu" component={Menu} />
            <Route path="/provider/attendance-manifestation" component={AttendanceXManifestation} />
        </Switch>
    </ BrowserRouter>
  )
}