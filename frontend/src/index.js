import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import allReducers from './reducers'

const store = createStore(
  allReducers, 
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk));

// store.subscribe(()=>{console.log(store.getState())})

// store.dispatch({type: 'LOGIN'})
// store.dispatch({type: 'LOGOUT'})

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App  />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

/* const login = () => {
  return {
    type: 'LOGIN'
  }
}

const logout = () => {
  return {
    type: 'LOGOUT'
  }
}

const userReducer = (state = {id: 0, username: ''}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        id: 1,
        username: 'TestLogin'
      }
  
    case 'LOGOUT':
      return {
        id: 0,
        username: ''
      }

    default:
      return state
  }
} 




store.dispatch(login())

store.dispatch(logout()) */


