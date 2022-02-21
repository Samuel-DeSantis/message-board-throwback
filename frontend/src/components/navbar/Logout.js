import React, { Component } from 'react'
import { login, logout } from "../../actions";
import { connect } from "react-redux";

class Logout extends Component {
  
    handleOnClick = () => {
        this.props.logout()
        this.props.history.push('/')
    }

    render() {
    return (
      <button className='logout-button' onClick={this.handleOnClick}>Logout</button>
    )
  }
}

const mapDispatch = dispatch => {
    return {
      login: (userInfo) => dispatch(login(userInfo)),
      logout: () => dispatch(logout())
    }
  }

export default connect(null, mapDispatch)(Logout)