import React from "react";
import ReactDOM from "react-dom/client";

const rootEle = document.querySelector("#root");
const root = ReactDOM.createRoot(rootEle);

const newRootEle = document.querySelector('#new-root');
const newRoot = ReactDOM.createRoot(newRootEle);

const rootEleTwo = document.querySelector('#root-two');
const rootTwo = ReactDOM.createRoot(rootEleTwo);


const headingText = (
    <>
        <h1>React Framework</h1>
        <ul>
            <li>ReactJS</li>
            <li>React Native</li>
        </ul>
    </>
);

const paragraph1 = (
    <p>React is Library created and being developed by Meta (previously Facebook)</p>
);

const paragraph2 = (
    <>
        {paragraph1}
        <p>It is part of MERN Stack (MongoDB, ExpressJS, ReactJS, NodeJS)</p>
    </>
);

// Rendering a React element onto the page
rootTwo.render(paragraph2);

function Paragraph3() {
    return (
        <p>Go to <a href="https://react.dev" target="_blank">react.dev</a> to learn more about React</p>
    );
}

function Paragraph4() {
    return (
        <>
            <Paragraph3 />
            <p>2024 &copy; Prabhu Kalyan</p>
        </>
    )
}
root.render(headingText);

// Rendering a Functional Component onto the page
newRoot.render(<Paragraph4 />);