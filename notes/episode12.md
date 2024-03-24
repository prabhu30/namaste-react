## Layers of React Application

- There are two layers while building any react application
  - **UI Layer** : Whatever a user sees on the UI, i.e., whataver is visible on the device, is built in the UI layer. The UI of the components, styles, etc.
  - **Data layer** : The operations involving data, are done in the **backend**, in the data layer. It could be fetching the data from API, managing the state of application, passing props to components, etc.
- For a react application to work seamlessly, the UI layer and Data layer has to be in sync.

## Redux and Redux Toolkit

- Official Docs - [Link](https://redux.js.org/)
- **Redux** is an open-source JavaScript library for managing and centralizing application state ( `Zustand` is another one such library, which is gaining great popularity these days).
- Redux can be used not only with react, but also with other frontend libraries and frameworks such as Angular, Vue, etc.
- Redux works in and with the data layer
- **IMPORTANT :** While building a react application, redux might not be mandatory for you. There is `useContext` which might serve your purpose. But, after learning and understanding redux, if you feel it will ease the complex state management process in your application, you can definitely use it.

## Redux Store

- It is an object which is available in the global context, and can be accessed by any components
- This huge object is divided into logical partitions based on functionality, and these partitions are known as slices (cart slice, user slice, etc.)
- **How to write data into Redux Store**
  - A way of modifying a slice is,
    - When you click on a button (for example, Add to Cart button),
    - It dispatches an action,
    - Which calls a function and
    - The function modifies the slice of the object, i.e., the redux store (for example, Cart)
    - The function which modifies the Cart slice is called as the `reducer function`
- **How to read data from the Redux Store**
  - A way of reading data from slice (may be, to display it somewhere) is,
    - By using a `Selector`
    - This selector is used to fetch the data from the redux store and we can then use it anywhere we want
- **Subscribing to the Store**
  - It means to auto-update / sync the change as soon as data is changed in the Redux Store
  - To subscribe to the store, you can use a `selector`
-
