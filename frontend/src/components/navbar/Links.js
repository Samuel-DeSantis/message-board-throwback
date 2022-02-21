import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Logout from './Logout';
import { connect } from "react-redux";

class Links extends Component {
  
  showLinks = () => {
    
      if (this.props.username) {
        return (
          <> 
            <div className='nav-signed-in-user'>User: {this.props.username}</div>
            <a className='nav-logout' href='/'><Logout /></a>
          </>
          )
      } else {
        return (
          <>
            <Link className='link' to='/sign_in'>Sign In</Link>
            <Link className='link' to='/sign_up'>Sign Up</Link>
            <Link className='link' to='/anon'>Anon</Link>
          </>
        )
      }
  }
  
  render() {
    return (
        <>{this.showLinks()}</>
    )
  }
}

const mapState = state => {
  return {username: state.userReducer.username}
}

export default connect(mapState)(Links)