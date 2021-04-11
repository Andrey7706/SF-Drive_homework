import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';

import App from "./components/App";
import './scss/main.scss';
import collapsible from './js/script.js';

ReactDOM.render((
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  ), document.getElementById('root')
 );

// import * as $ from 'jquery';
collapsible();