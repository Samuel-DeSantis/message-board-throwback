import React, { Component } from 'react'
import { connect } from "react-redux";
import { login, logout } from "../../actions";

const URL = 'http://localhost:5000/'

class SignIn extends Component {

  state = {
    username: '',
    password: '',
    status: 'SIGN_IN'
  }

  formatState = () => Object.assign({}, {user: this.state})
  
  handleOnChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit = e => {
    e.preventDefault()
    // console.log(this.formatState())

    const SUFFIX = 'users'
    
    fetch(URL + SUFFIX, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.formatState())
    })
    .then(response => response.json())
    .then(result => {
      console.log('Success: ', result)
      if (result !== undefined) {
        this.props.login({
          id: result.id,
          username: result.username
        })
      }
    })
    .then(error => console.log('Error :', error));
    this.props.history.push('/messages')
  }

  signInForm = () => {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <h2>Sign In Here</h2>
        <label className='form-label-username'>Username</label>
        <input 
          type='text'
          name='username'
          value={this.state.username}
          onChange={this.handleOnChange} 
          placeholder='Your username...'
        /><br/>
        <label className='form-label-password'>Password</label>
        <input 
          type='password'
          name='password'
          value={this.state.password}
          onChange={this.handleOnChange} 
          placeholder='Your password...'
        /><br/>
        <input className='form-submit-button' type='submit' />
      </form>
    )
  }

  render() {
    return (
      <div className='sign-in-page'>{this.signInForm()}</div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    login: (userInfo) => dispatch(login(userInfo)),
    logout: () => dispatch(logout())
  }
}

export default connect(null, mapDispatch)(SignIn)