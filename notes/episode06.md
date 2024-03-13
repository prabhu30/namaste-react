## useEffect Hook 🚀

- useEffect hook accepts two arguments - one if callback function, second is a dependency array
- **useEffect will be called everytime a component renders.**
- Let us suppose, you are using **useEffect** inside a profile card component.
  - If there is no second argument passed to the hook, i.e., **no dependency array passed ,** everytime the profile component is rendered onto the page, useEffect is called. **It will be called once the component is rendered**
  - If the second argument to **useEffect Hook**, i.e., the dependency array, if it is passed as **empty array**, useEffect hook will be called **only once during initial render of the component**, that's it.
  - If the dependency array contains something, like `[viewsCount]`, the useEffect hook will be called **whenever that value (viewsCount) changes**.

## Shimmer UI

- Shimmer UI is a fake UI / temporary animation placeholder which can be displayed for better UX (user experience) while the data is being fetched in the backend
