## React Router 🚀

- Official Documentation - [React Router](https://reactrouter.com/)
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

## Link Tag 🔗

- **React router DOM** also offers a powerful link tag, which is a replacement for <a></a> tag
  - It can be used inside <li></li> tag in Navbar like below,
    ```
        <li><Link to="/">Home</Link></li>
    ```
- Through this tag, whenever a nav link has been accessed, **the entire page doesn't reload**
- Only the component children which are needed, will be re-rendered, but the page doesn't reload

## Types of Routing in Web Applications

- `**Server Side Routing**`
  - In server side routing, whenever a link is clicked (for example, about-us page), a network call is made to fetch the resource page and once it is fetched, the page is reloaded to display the requested resource
- `**Client Side Routing**`
  - In client side routing, whenever a link is clicked, **that component is just rendered**, network call **will not be made** to fetch that resource page

# Single Page Application (SPA) 🚀

- **What is SPA?**
  - A Single Page Application is a single page (hence the name) where a lot of information stays the same and only a few pieces / components need to be updated at a time.
- React helps in building SPAs, with the help of its features like client side routing, reconciliation and same page rendering. Everything and every operation happens on the same page.
