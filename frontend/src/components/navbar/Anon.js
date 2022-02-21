import React, { Component } from 'react'
import { connect } from 'react-redux';
import { v4 as uuidv4 } from "uuid";
import { login, logout } from "../../actions";

const URL = 'http://localhost:5000/'

class Anon extends Component {

  state = {
    username: '',
    clicked: false,
    message: 'Continue as anonymous?'
  }

  formatState = (username) => Object.assign({}, {user: {status: 'SIGN_UP', username: username, password: 'anonymous'}})
  
  btnClick = (id) => {
    this.setState({
      clicked: true,
      message: `Your Anon ID is: ${id}`
    })
  }
  
  btnUnclick = () => {
    this.setState({
      ...this.state,
      clicked: false
    })
  }

  handleOnClick = () => {
    if (!this.state.clicked) {

      const id = uuidv4().slice(0, 5)
      const SUFFIX = 'users'
      const username = `anon: ${id}`

      this.btnClick(id, username)
    
      fetch(URL + SUFFIX, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(this.formatState(username))
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
      .then(error => {if (error) console.log('Error :', error)});

      setTimeout(() => {
        this.btnUnclick()
        this.props.history.push('/messages')
      }, 2000) 
    }
  }

  showButton = () => {
    if (!this.state.clicked) {
      return <button className='continue-anon-button' onClick={this.handleOnClick}>Continue</button>
    }
  }
  
  render() {
    return (
      <div className='continue-anon'>
        <h3 className='continue-anon-message'>{this.state.message}</h3>
        {this.showButton()}
      </div>
    )
  }
}

const mapState = state => {
  return { username: state.username}
}

const mapDispatch = dispatch => {
  return {
    login: (userInfo) => dispatch(login(userInfo)),
    logout: () => dispatch(logout())
  }
}

export default connect(mapState, mapDispatch)(Anon)