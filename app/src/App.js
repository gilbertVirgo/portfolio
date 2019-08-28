import React from 'react';

import {Switch, Redirect, Route} from "react-router-dom";

import "./scss/main.scss";
import Master from './components/Master';

const App = () => (
  <Switch>
    <Redirect exact from="/" to="/screen/1" />
    <Route path="/screen/:id" render={props => <Master {...props}/>}/> 
  </Switch>
);

export default App;
