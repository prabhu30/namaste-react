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
