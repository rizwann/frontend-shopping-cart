import { combineReducers } from "redux";
import productReducer from "./productReducers";

const rootReducer = combineReducers({ productReducer });

export type RootStateType = ReturnType<typeof rootReducer>;

export default rootReducer;
