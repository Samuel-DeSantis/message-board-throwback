import React, { Component } from 'react'
import NewMessage from '../components/messages/NewMessage'
import Messages from "../components/messages/Messages";

export default class MessagesContainer extends Component {
  render() {
    return (
      <div className='messages-container'>
          <NewMessage />
          <Messages />
      </div>
    )
  }
}
