## React Router 🚀

- React Router is a standard library for routing in React. It enables the **navigation among views of various components** in a React Application
- In order to get started, install `react-router-dom` package using the below command
  ```
    npm i react-router-dom
  ```
- Now, import `createBrowserRouter` from `"react-router-dom"` module
- This function lets us to make routing configuration
- Pass all the routes as objects to this function and store it in a variable

  ```
    const routing = createBrowserRouter([
        {
            path: '/',
            element: <Main />
        },
        {
            path: '/about',
            element: <About />
        }
    ])
  ```

- Next, import `RouterProvider` from `"react-router-dom"`
- Now, render the `RouterProvider` instead of the main component. This will render all components along with routing enabled
  ```
    root.render(<RouterProvider router={routes} />);
  ```
