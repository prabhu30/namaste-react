import React from "react";
import ReactDOM from "react-dom/client";

const rootEle = document.querySelector("#root");
const root = ReactDOM.createRoot(rootEle);

const headingText = (
    <>
        <h1>React Framework</h1>
        <ul>
            <li>ReactJS</li>
            <li>React Native</li>
        </ul>
    </>
);

root.render(headingText);