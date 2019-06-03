import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import rootReducer from "./rootReducer";

import rootEpic from "./epics";

const epicMiddleware = createEpicMiddleware();

// Redux devtool
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);

export default store;
