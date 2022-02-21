const initialState = {
    messages: [],
    requesting: false
  }
  
   const messageReducer = (state = initialState, action) => {
    
    switch(action.type) {
      case 'START_ADDING_MESSAGES':
        return {
          ...state,
          messages: [...state.messages],
          requesting: true
        }
      case 'ADD_MESSAGES':
        return {
          ...state,
          messages: action.messages,
          requesting: false
        }
      default:
        return state
    }
  };
  
  export default messageReducer;