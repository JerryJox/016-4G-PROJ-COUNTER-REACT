//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import "bootstrap";
import PropTypes from 'prop-types';


//import your own components

function SecondsCounter(props){
    return (<div className="bigCounter">
        <div><i className="far fa-clock"></i></div>
        <div className="six">{props.digitSix % 10}</div>
        <div className="five">{props.digitFive % 10}</div>
        <div className="four">{props.digitFour % 10}</div>
        <div className="three">{props.digitThree % 10}</div>
        <div className="two">{props.digitTwo % 10}</div>
        <div className="one">{props.digitOne % 10}</div>

    </div>);
}
SecondsCounter.prototype = {
    digitSix: PropTypes.number,
    digitFive: PropTypes.number,
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number,
}
let i = 0;

setInterval(function () {
    const six = Math.floor(i/100000)
    const five = Math.floor(i/10000)
    const four = Math.floor(i/1000)
    const three = Math.floor(i/100)
    const two = Math.floor(i/10)
    const one = Math.floor(i/1)
    console.log(six, five, four, three, two, one);
    //render your react application
    i++;
    ReactDOM.render(<SecondsCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six}/>, document.querySelector("#app"));
},1000)