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
                <Route path="/about" component={About} />
                <Route path="/faq" component={Collapsible} />
            </Switch>
        </Router> 
    );
}

export default App;
