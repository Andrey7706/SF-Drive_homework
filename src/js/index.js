import { BrowserRouter } from 'react-router-dom';

import React from "react";
import ReactDOM from "react-dom";
import App from "../components/App";
import '../scss/main.scss';
import collapsible from './collapsible.js';


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root')
    );


// import * as $ from 'jquery';
collapsible();
