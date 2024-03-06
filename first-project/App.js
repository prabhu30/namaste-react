import React from "react";
import ReactDOM from "react-dom/client";

const rootContainer = document.querySelector("#root");

const headingElement = React.createElement(
    "h1",
    { class: "heading" },
    "Hello from React JS!!!"
);

const parent = React.createElement(
    "div",
    { class: "parent" },
    [
        React.createElement("h1", {}, "Learning React is a best choice 🚀"),
        React.createElement("ul", { class: "unordered-list" }, [
            React.createElement("li", {}, "Namaste React by Akshay Saini"),
            React.createElement("li", {}, "Chai aur React by Hitesh Choudhary")
        ]),
        React.createElement("ol", { class: "ordered-list" }, [
            React.createElement("li", {}, "I love Web Development"),
            React.createElement("li", {}, "I want to be healthy")
        ])
    ]
)

const root = ReactDOM.createRoot(rootContainer);
root.render(parent);