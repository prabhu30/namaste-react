# Episode 03 | Laying the Foundation 🚀

- Episode Link - [Link](https://namastedev.com/learn/namaste-react/ep-03-laying-the-foundation)

## JSX

- **JSX** is a syntax extension to JavaScript
- JSX syntax cannot be written inside JavaScript File. If written, browser will not be able to parse / understand that syntax. Browser only understands ECMA Script
- JSX Attributes follow camelCase syntax like,
  - className
  - tabIndex

## Babel - Transpiler / Transcompiler

- Even though you write JSX inside JS file, when you run the React application, there won't be any problem while rendering the content on the page.
- This is because when you start the development server, the **bundler** (which is **Parcel** in our case), uses a transcompiler, which is **Babel** in this case.
- The job of Babel is to **transpile** the code / convert the code into javascript code which the JS engine can understand.

## Component in React

- A component is a piece of UI that has its own logic and appearance. It can be as small as a button or as big as an entire page.
- There are two types of components in React
  - Function component (Used in 99.99% of the codebases)
  - Class component (only used in legacy code)
- React **Functional** Component is a Javascript function which returns markup, i.e., which returns JSX, i.e., which returns React element.
- Example of function component -

  ```
    function MyApp() {
        return (
            <h1>Hello React!</h1>
        );
    }
  ```

- A component can be used / called in other components in multiple ways
  - Mostly used syntax
  ```
    <LoginComponent>
  ```
  - Alternative Syntax 01
  ```
    <LoginComponent></LoginComponent>
  ```
  - Alternative Syntax 02
  ```
    { LoginComponent() }    ==> JavaScript inside JSX (accepted)
  ```

## Power of JSX (Blocking XSS)

- If you are obtaining data from an external API, and then rendering the data onto the page, JSX doesn't blindly render the data
- If the incoming data from API is malicious, JSX does prior processing on the data and if it's malicious data, it won't render the data onto the page
-
