import React, { Component } from 'react'
import NavbarContainer from './containers/NavbarContainer';
import './App.css'
import NavRoutes from './components/navbar/NavRoutes';

class App extends Component {

  render () {
    return (
      <>
        <NavbarContainer />
        <NavRoutes />
      </>
    );
  }
}
export default App
