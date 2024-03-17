## Single Responsibility

- Each component in your react application should have a single responsibility
- It's a very bad practice to keep multiple functionalities in a same component
- Due to this, the code becomes more
  - Readable
  - Maintainable
  - Testable

## Custom Hooks

- As mentioned earlier, hooks are just a normal javascript utility functions. So, we can write any code inside them and import it in our code multiple times
- This results in code reusability
- Generally, if you are doing some operations in a component other than rendering it, it's better to export it into a seperate hook, which is also called as **custom hook**
- React library itself recommends that the name of custom hooks start with **use** word, for example :
  ```
    export default function **useOnlineStatus()**
  ```

## Lazy Loading

- The process of **loading** a react component only **when required / on-demand** is called as Lazy Loading.
- With lazy loading, that component which is lazily loaded will be bundled into a seperate file
- In a react application, it is recommended to have **bundling for each major feature**, instead of bundling everything into a single file
- This process is called as
  - **Lazy Loading**
  - On-demand loading
  - Dynamic Import
  - Chunking
  - Code splitting
  - Dynamic bundling
