import React from 'react'
import { Switch, Route } from "react-router-dom";
import SignIn from "../navbar/SignIn";
import SignUp from "../navbar/SignUp";
import Anon from "../navbar/Anon";
import Messages from "../messages/Messages";
import Home from "../Home";
import MessagesContainer from '../../containers/MessagesContainer';

export default function NavRoutes() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/sign_in' component={SignIn} />
      <Route exact path='/sign_up' component={SignUp} />
      <Route exact path='/anon' component={Anon} />
      <Route exact path='/messages' component={MessagesContainer} />
    </Switch>
  )
}
