# Namaste React 🚀

- Course Link - [Namaste React by Akshay Saini](https://namastedev.com/learn/namaste-react/)

## Setting up a **React** project from Scratch

- Create a folder <- project-name ->
- Open command prompt inside that folder

  ```
  cd project
  ```

- Create `index.html` file and write this below code in the body

  ```
  <div class="root"></div>

  <script type="module" src="main.js">
  ```

- To initialize packaging, execute `npm init`
- Install a bundler as dev dependency, for example :-

  ```
  npm install -D parcel
  ```

- Install react and react-dom dependencies

  ```
  npm i react
  npm i react-dom
  ```

- Write some React and JSX code in your main script, for example in `main.js` write,

  ```
  import ReactDOM from 'react-dom/client';

  const root = ReactDOM.createRoot(document.querySelector('.root'));

  const Heading = function () {
      return (
          <h1>Hey, Welcome to Tech Zone! 🚀</h1>
      )
  }

  root.render(<Heading />);
  ```

- Now, let parcel handler the execution. Run this command - `npx parcel index.html`

- In order to simplify running / spinning up development server, replace this line from `package.json` -

  ```
  "main": "index.js"
  ```

  with this

  ```
  "source": "src/index.html"
  ```

- In `scripts` object of `package.json`, write this -

  ```
  "start": "parcel",
  "build": "parcel build",
  ```

- From next time, when you want to start the development server, use `npm start`
- If you want to generate a production build, use `npm build`

- That's it, you are good to go!!! Write some amazing react code, and kickstart the server 🚀
