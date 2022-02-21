import React, { Component } from 'react'
import { connect } from "react-redux";

const URL = 'http://localhost:5000/'
const SUFFIX = 'messages'

class Message extends Component {

  redactMessage = (id, user, content) => {
    if (user === this.props.username && content !== '[REDACTED]') {
      return <button onClick={this.handleOnClick} className='message-remove-button'>Remove</button>
    }
  }

  handleOnClick = () => {

    const { id, username } = this.props.message

    fetch(URL + SUFFIX + `/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({message: {username: username, content: '[REDACTED]'}})
    })
    .then(result => console.log('Success: ', result))
    .then(error => {if (error) console.log('Error :', error)});
  }

  render() {

    const { id, user, content } = this.props.message

    return (
      <tr key={id} className='message'>
        <td className='message-user'>{user}</td>
        <td className='message-content'>{content}</td>
        <td>{this.redactMessage(id, user, content)}</td>
      </tr>
    )
  }
}

const mapState = state => {
  return {username: state.userReducer.username}
}

export default connect(mapState)(Message)