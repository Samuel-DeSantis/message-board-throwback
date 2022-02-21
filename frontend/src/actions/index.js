export const login = (userInfo) => {return {type: 'LOGIN', data: userInfo}}
export const logout = () => {return {type: 'LOGOUT'}}
export const refresh = () => {return {type: 'REFRESH'}}
export const startAddingMessages = () => {return {type: 'START_ADDING_MESSAGES'}}
export const addingMessages = () => {return {type: 'ADD_MESSAGES'}}