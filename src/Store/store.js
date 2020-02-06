import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import tableReducer from "../Reducers";

const store = createStore(
  combineReducers({ table: tableReducer }),
  applyMiddleware(ReduxThunk)
);

export default store;