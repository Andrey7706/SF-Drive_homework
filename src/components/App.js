import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './Main';
import About from './About';
import Collapsible from './Collapsible';
import Registration from './Registration/Registration';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/about" component={About} />
                <Route path="/faq" component={Collapsible} />
                <Route path="/Registration" component={Registration} />
            </Switch>
        </Router> 
    );
}

export default App;
