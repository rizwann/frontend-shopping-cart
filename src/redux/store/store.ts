import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

const store = () => {
  const middlewares = [thunk];

  const reduxStore = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  return reduxStore;
};

export default store;
