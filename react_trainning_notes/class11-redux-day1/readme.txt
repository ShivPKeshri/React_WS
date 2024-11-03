# intercommunication between the components
1. Props
2. Context API - this is the part of the react library
3. State management library - rex, flux


# redux
- redux is the javascript based library used for state management

State = data

- the idea is to maintain centrally / globally data which can be accessed by any component irrespective of the position and order of the component otherwise we have to pass data to each and every component in the component tree

- misconception: redux is the part of react library which is wrong
Redux is an independent library used to maintain state of the app which is using javascript


# Redux Architecture
It consist of three main components
- store
- action
- reducer

Store - a place where an entire state of the app is listed and managing the status of the app at given point of time

Action - a pure object contained within store having the information about the user event, the action is send from the view to the reducer


Reducer - reducer is a function which is a able to read the payload from the action and then execute updating the store




# Steps
1. Install dependencies
> npm install redux
> npm install react-redux


2. Create store/index.js

3. Create initialState

// initial state
const initialState = {
    counter: 0
}

4. Create reducer

// create reducer
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'increment':
            return{
                counter: state.counter + 1
            }
        case 'decrement':
            return{
                counter: state.counter - 1
            }
        default:
            return state;
    }
}

5. Create store

// create store
const store = createStore(counterReducer);

export default store;


6. configure store with react app

index.js

import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);



7. Consume store in react component 









