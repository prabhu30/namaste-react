const rootContainer = document.querySelector("#root");
        
const headingElement = React.createElement(
    "h1", 
    { class: "heading" }, 
    "Hello from React JS!!!"
);
        
const root = ReactDOM.createRoot(rootContainer);
root.render(headingElement);