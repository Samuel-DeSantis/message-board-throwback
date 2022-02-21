import userReducer from "./userReducer";
import messageReducer from "./messageReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    userReducer,
    messageReducer
})
export default allReducers