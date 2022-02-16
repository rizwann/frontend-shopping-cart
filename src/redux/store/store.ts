import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer, { RootStateType } from "../reducers/rootReducer";

const saveToLocalStorage = (state: RootStateType) => {
  try {
    localStorage.setItem("state", JSON.stringify(state));
  } catch (e) {}
};

const loadFromLocalStorage = () => {
  try {
    const state = localStorage.getItem("state");
    if (state === null) {
      return undefined;
    }
    return JSON.parse(state);
  } catch (e) {
    return undefined;
  }
};

const store = () => {
  const middlewares = [thunk];

  const reduxStore = createStore(
    rootReducer,
    loadFromLocalStorage(),
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  reduxStore.subscribe(() => {
    saveToLocalStorage(reduxStore.getState());
  });
  return reduxStore;
};

export default store;
