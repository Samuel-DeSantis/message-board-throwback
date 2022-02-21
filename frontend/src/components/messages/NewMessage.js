import React, { Component } from 'react'
import { connect } from "react-redux";
import { refresh } from '../../actions';

const URL = 'http://localhost:5000/'

class NewMessage extends Component {
  
  state = {
    message: ''
  }
  
  formatState = () => Object.assign({}, {message: {content: this.state.message, username: this.props.username}})

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit = e => {
    e.preventDefault()
    // console.log(this.formatState())

    const SUFFIX = 'messages'
    
    fetch(URL + SUFFIX, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.formatState())
    })
    .then(response => response.json())
    .then(result => console.log('Success: ', result))
    .then(error => {if (error) console.log('Error :', error)});
    
    this.setState({
      message: ''
    })
    this.props.refresh()
    // console.log(this.props.username)
  }

  newMessageForm = () => {
    return (
      <>
        <form onSubmit={this.handleOnSubmit}>
          <input 
            type='textarea'
            className='new-message-textarea'
            name='message'
            value={this.state.message}
            onChange={this.handleOnChange} 
            placeholder='Write a message'
            autoComplete='off'
          />
          <input className='new-message-submit' type='submit' value='Send'/>
        </form>
      </>
    )
  }
  
  
  render() {
    return (
      <div className='new-message-form'>{this.newMessageForm()}</div>
    )
  }
}

const mapState = state => {
  return {username: state.userReducer.username}
}

const mapDispatch = dispatch => {
  return {
    refresh: () => dispatch(refresh())
  }
}

export default connect(mapState, mapDispatch)(NewMessage)