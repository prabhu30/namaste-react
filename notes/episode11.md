## Higher Order Components

- It is a normal javascript function, which takes a component, enhances / modifies the component and returns a component
- Image you want to perform an action on only few sub-components in your main component (may be adding a promoted label, may be displaying them is a different color, etc.). In this case, you can pass props to your sub-component and based on the props received, you can perform some action in sub-component (Refer **RestaurantCard.js** in this repo for more details)

## Controlled & Un-controlled Components

- **Controlled Components**
  - If a component is controlled by it's parent, then it's a controlled component
- **Un-controlled Components**
  - If a component is not controlled by it's parent, then it's a un-controlled component

## Lifting State Up

- Sometimes, we will have a situation where we have to give control of a component to it's parent
- In such scenario, the state of child should be managed by parent.
- Hence, we will remove the state management from child and we ask parent component to manage the child component's state
- This is called **lifting up the state**
- For more detailed info, refer these docs
  - Article on official docs - [Link](https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example)
  - Legacy React Doc - [Link](https://legacy.reactjs.org/docs/lifting-state-up.html)
  - FreeCodeCamp - [Link](https://www.freecodecamp.org/news/what-is-lifting-state-up-in-react/)

## Props Drilling

- Imagine a scenario, where you want to pass some data from the root component of your application to some nested inner child component, which is nested in 5 levels
- It can be done by passing that data from root component to it's child component and then to it's child and so on, until it reaches the destination child component, also referred to as **drilling the props**
- This is a bad way of passing the props, because the intermediary components have nothing to do with that prop, they are just passing it to it's children component
- To avoid this, React introduced a concept called as **Context API**

## Context API

- React offers a `useContext` hook, which you can use to set and update the context in the application
- To create a context,

  ```
    import { createContext } from 'react';

    const UserContext = createContext(
      {
        username: "Guest"
      }
    )

    export default UserContext
  ```

- To retrieve values from a context,

  ```
    const { username } = useContext(UserContext)

    <p>Welcome, {username}!</p>
  ```

- To provide a context for a root component or any other component, you can use below code. When you change values of this context, the value will be updated wherever it is being used inside that <App /> component

  ```
    <UserContext.Provider value={{username: "Guest"}}>
        <App />
    </UserContext.Provider>
  ```

- To retrieve values from UserContext
  ```
    <UserContext.Consumer>
        { ( {username} ) => <p>Welcome, {username}!</p> }
    </UserContext.Consumer>
  ```
