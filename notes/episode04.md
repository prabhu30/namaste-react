<!-- Tech Zone App Design -->
<!-- https://excalidraw.com/#json=ISjPeH7jxdYkViFAPShCT,fM3eqk317S5AAlCTYhDY1Q -->

## Props ⚙

- Props is a shorthand for properties.
- Props is a way through which we can pass data to the component dynamically.
- Using props, you can pass arguments to the function (functional component).

## Config Driven UI

- When the UI changes according to the backend configuration coming in, it is known as config driven UI or data driven UI

## "key" attribute while rendering list of components

- When you are rendering list of components of same type, you need to pass a "key" attribute as a prop to the component

  ```
  <div>
      {
        Laptops.map((laptop) => (
            <Laptop key={laptop.id} />
        ))
      }
  </div>
  ```

- This "key" prop is essential for react to uniquely identify the component from the list of components, and make changes / re-render only that particular component instead of all the components.

- Not passing the "key" prop doesn't cause any issue while rendering, but in the developer console, a warning will be thrown saying key should be passed. So, it is recommended to pass "key" prop while rendering list of components of same type.

- Also, passing "index" as the value for "key" prop is not recommended, but warning will not be thrown.
