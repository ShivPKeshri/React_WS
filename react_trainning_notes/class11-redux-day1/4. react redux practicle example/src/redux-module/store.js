import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// createStore() is a function from the Redux library that takes two arguments.
// The first argument is the reducer function, which is a function that returns
// the next state of the application given the current state and an action.
// The second argument is the initial state of the application.
// The third argument is an enhancer function, which is an optional argument.
// An enhancer function is a function that takes the createStore() function as
// an argument and returns a new createStore() function with additional
// functionality. In this case, the enhancer function is the
// __REDUX_DEVTOOLS_EXTENSION__() function, which is a function provided by
// the Redux DevTools Chrome extension. This enhancer function adds the
// ability to view the state of the application in the Chrome extension.

export default store;
