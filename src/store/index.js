import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";

// Redux devtool
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

// Thunk middleware
const thunk = store => next => action =>
  typeof action === "function"
    ? action(store.dispatch, store.getState)
    : next(action);

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
