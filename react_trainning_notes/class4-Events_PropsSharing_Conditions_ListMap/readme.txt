# Events
An event is an action that could be triggered by user interaction or can be result of system generated event

In react like javascript it has its specific method to handle the events, which are conceptually similar to handling events on Dom elements

Example
- click
- mouse
- change 
Etc

React handle its event using its own event handling system knowns as synthetic events

Event handler will be passed as instance of synthetic event, a cross browser wrapper around the native events it has the same interface as browser native event except the event work identically across all browser

There are some syntactical different in handling event with react form handling event on DOM

1. React events are name as camel case instead of lowercase

onclick		  onClick
onchange	onChange

2. With JSX function function is passed as the eventHandler instead of a string 

onclick="handler()".      onClick={ handler }

3. It cannot return false in react to prevent default behaviour instead we can use explicitly preventDefault to prevent the same


# Passing data from child to parent using props

# conditional rendering
- if / else
- element value
- turnery operator
- circuit breaker



(condition) ? 'True statement': 'false statement'


Condition && 'true statement'


	

# List



