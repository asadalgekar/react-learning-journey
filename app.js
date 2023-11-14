// create h1 tag object
const heading = React.createElement("h1", { id: "heading" }, "Hello World from React");
// When to put tag in DOM use ReactDOM i.e place where we will render react code i.e imside root div
const root = ReactDOM.createRoot(document.getElementById("root"));
//  take object and convert into h1 tag and put inside specified dom child
root.render(heading);

// Nested tag
{
    /* <div id ="parent"> 
        <div id= "child">
            <h1> Nested h1 tag inside two divs.</h1>
        </div>
    </div> */
}

const nestedParent = React.createElement("div", { id: "nested-parent" }, React.createElement("div", { id: "nested-child" }, React.createElement("h1", {}, "Nested h1")));
const nestedRoot = ReactDOM.createRoot(document.getElementById("nested"));
nestedRoot.render(nestedParent)