const initialState = {
  id: 0, 
  username: '', 
  loggedIn: false
}

 const userReducer = (state = initialState, action) => {
  
  switch(action.type) {
    case 'LOGIN':
      return {
        id: action.data.id,
        username: action.data.username/* action.username */,
        loggedIn: true
        // loading: false
      }
    case 'LOGOUT':
      return {
        id: 0,
        username: '',
        loggedIn: false
      }
    default:
      return state
  }
};

export default userReducer;
/* , loading: false */

/*     case 'LOADING_LOGIN':
      return {
        ...state,
        loading: true
      } */