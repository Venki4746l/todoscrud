//rootReducer is the main output for geting the names of varibles in this we send ouput name for geting the
//data of useSlector
import todoReducer from "./reducers/todoReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ todos: todoReducer, });
export default rootReducer
