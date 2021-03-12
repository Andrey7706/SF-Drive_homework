import React from "react";
import ReactDOM from "react-dom";
import App from "../components/App";
import Faq from "../components/Faq";
import '../scss/main.scss';
import collapsible from './collapsible.js';


ReactDOM.render(<App />, document.getElementById('root-about'));
ReactDOM.render(<Faq />, document.getElementById('root-faq'));


    

// import * as $ from 'jquery';
collapsible();
