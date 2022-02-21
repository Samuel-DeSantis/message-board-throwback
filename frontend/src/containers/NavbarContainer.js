import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Links from '../components/navbar/Links';
import NavRoutes from '../components/navbar/NavRoutes';

export default class NavbarContainer extends Component {
  render() {
    return (
      <h4 className='navbar-wrapper'>
        <nav className='navbar'>
            <div>Message Board</div>
            <Links />
        </nav>
      </h4>
    )
  }
}
