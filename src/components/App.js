import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './Main';
import About from './About';
import Collapsible from './Collapsible';



function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/about.html" component={About} />
                <Route exact path="/faq.html" component={Collapsible} />
            </Switch>
        </Router> 
    );
}

export default App;