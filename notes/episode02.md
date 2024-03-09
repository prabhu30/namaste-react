# Parcel 📦

- 🌟 Awesome Reference Article - [Link](https://www.digitalocean.com/community/tutorials/how-to-bundle-a-web-app-with-parcel-js) 🌟
- Official Documentation - [parceljs.org](https://parceljs.org/)

- It is an open-source bundler, which is used to bundle a web app

* In-built tools of Parcel are,
  - Bundling
  - Differential Bundling
  - Build Application (makes it production-ready)
  - Development Server
  - Hot Reloading
  - File Watching Algorithm (written in C++)
  - Caching for Faster Builds
  - Diagnostics
  - Minification
  - Image compression
  - Consistent Hashing
  - Code Splitting

- To install parcel bundler, use command

  - `npm install --save-dev parcel`

- To create a development build (if one doesn't exist) and immediately start the development server, run the below command inside your project directory

  - `npx parcel src/index.html`

- To generate production build of your application, run the below command inside your project directory (this doesn't start any server, as the command is build)

  - `npx parcel build index.html`
