const root = document.getElementById("root");
const React = require('react');
const ReactDOM = require('react-dom');
require('./styles.css')
const  { Nav }  = require("./components/nav/nav");

/*
Here :
Index is a functional component that returns a React element.
ReactDOM renders it inside the <div id="root"></div> from index.html
*/
const Index = () => {
    // console.log(Nav)
    return (
        <div className="div-holder">
            <Nav />
          <p>Welcome to React!</p>
         
        </div>
    );
}

ReactDOM.render(<Index/>, root);