import React, { Component } from 'react'
import { connect } from "react-redux";
import Message from './Message';
import { refresh } from '../../actions';

const URL = 'http://localhost:5000/'
const SUFFIX = 'messages'

class Messages extends Component {
  
  state = {
    error: null,
    messages: [],
    isLoaded: false
  }

  componentDidMount () {
    this.fetchMessages()
  }

  componentDidUpdate () {
    setTimeout(() => {
      this.fetchMessages()
    }, 100)
  }

  fetchMessages = () => {
    return (
      fetch(URL + SUFFIX)
      .then(response => response.json())
      .then(result => {
        this.setState({
          messages: result,
          isLoaded: true
        })
      })
      .then(error => {
        if (error) {
          console.log('Error :', error)
          this.setState({
            ...this.state,
            error: error
          })
        }
      })
    )
  }

  getMessages = (messages) => {
      return messages.map(message => {
        return <Message message={message} />
      })
  }

  render() {

    const { error, isLoaded, messages } = this.state

    if (error) {
      return <div className='error'>Error: { error }</div>
    } else if (!isLoaded) {
      return <div className='loading'>Loading...</div>
    } else {
      return (
        <div className='messages'>
          <table className='table table-striped'>
            <tbody>
              {this.getMessages(messages)}
            </tbody>
          </table>
        </div>
      )
    }
  }
}

const mapState = state => {
  return {refreshComponent: state.messageReducer.refresh}
}

const mapDispatch = dispatch => {
  return {
    refresh: () => dispatch(refresh())
  }
}

export default connect(mapState, mapDispatch)(Messages)