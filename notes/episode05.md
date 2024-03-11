## Types of Import & Export

- There are two types of import and export

  - Default
  - Named

- Default :- These can be used when you want to export/import just one entity

  ```
  export default Profile;

  import Profile from './components/Profile.js';
  ```

- Named :- These can be used when you want to export/import multiple entities from a file

  ```
  export const LOGO_URL;
  export let LaptopsList;

  import { LOGO_URL, LaptopsList } from './utils/constants.js';
  ```

## React Hooks 🚀

- A React Hook is just a **normal javascript utility function**, the only difference is that function has some logic written behind the scenes inside react
- Some of important react hooks are
  - `useState()`
  - `useEffect()`

## useState

- `useState` hook gives us two things -
  - a `state variable` , which can be used to manage state of our application
  - a function `setStateVariable` to update the value of the state variable
  - **IMPORTANT :** Whenever a state variable is updated, react re-renders the component(s) which are using / dependent upon that state variable.

## Virtual DOM

- Virtual DOM is a representation of the Actual DOM
- It is nothing but a kind of javascript object
- Whatever updates we do to our react components are not directly rendered onto the Actual DOM. Instead, those changes are made only in the Virtual DOM

## Diffing Algorithm

- **Diffing :** When you made a change to some component, React compares the difference between the previous virtual DOM (which is currently present on the browser), with the current virtual DOM, which hasn't been rendered onto browser yet.
- Only that component which has been changed, will be re-rendered, instead of the whole page
- This process is called **`diffing`** and algorithm used for it is called **`diffing algorithm`**

## Reconciliation Algorithm (React Fiber)

- This has been introduced in React 16
- This algorithm is used to update the DOM whenever something changes
- Reconciliation is React's way of diffing / comparing the virtual DOM tree with the updated virtual DOM to determine the most efficient way to update the real DOM
- When a component(node) state or prop changes, React decides whether it should render the changes on Real DOM or not. So, if the states/props of two nodes/components are not the same, then it renders the changes to real DOM. This process is called **`Reconciliation`**.
