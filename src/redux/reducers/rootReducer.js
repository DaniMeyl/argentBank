import { combineReducers } from "redux";
import userReducer from "./User";

const rootReducer = combineReducers({
    userReducer:userReducer
})

export default rootReducer