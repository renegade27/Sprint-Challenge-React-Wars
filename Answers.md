# Answers

1.  What is React JS and what problems does it try and solve?
React JS is a Javascript framework that aims to solve issues with state management, data management, and code reusability.

1.  What does it mean to _think_ in react?
To think in React (in my interpretation) is to be able to think of your components as building blocks, and your data aswell. By 'thinking in react' you aim to compartementalize your components, and control the data flow and lifecycle of your application.


1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
First, the two different ways of creating a component have many similarities, but don't let it fool you, they are circumstantial and you must know when to use either. A class component has a constructor function where your state is housed, it's also used when event handlers are needed. A functional component is used whenever you're trying to return JSX to the virtual DOM without using much state or handlers. If you don't need to track your data (besides props) then a functional component would be your go-to. But, if you need to manage user input data to build your site off of (requires state and event handlers), class components are the go-to.

1.  Describe state.
State in React is a way to house data inside a class, so that you can dynamically reference your state key/value pairs and 'set the state' of your webpage to update everything smoothly.

1.  Describe props.
Props are an object that houses key/value pairs to reference. In most cases, event handlers/state data/variables are handed down as 'props' so that we can reference them in a child.
