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
