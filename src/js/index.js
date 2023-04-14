//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
function SimpleCounter(props){
    return (<div className="bigCounter">
        <div className="calendar"></div>
        <div className="six"></div>
        <div className="five"></div>
        <div className="four"></div>
        <div className="three"></div>
        <div className="two"></div>
        <div className="one"></div>

    </div>);
}

let i = 0;

setInterval(function () {
    i++
    console.log(i)
    //render your react application
    ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));
},1000)