# Middleware

Redux middleware that allow you to return a function rather then just action within redux
This allow for delayed action including working with promised

One of the main use case for this middleware is for handling action that return might not be synchronous
For example using axios to send a get request

Redux thunk allows us to dispatch those action asynchronously and resolve each promises that get returned

> npm install redux-thunk

Once redux thunk has been installed and included in your project

applyMiddleware(thunk)

We can start dispatching action asynchronously