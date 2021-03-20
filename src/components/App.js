import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import About from './About';
import Collapsible from './Collapsible';
import Footer from './Footer';



function App() {
    return (
        <Fragment>
            <Header />
            <Router>
                <Switch>
                    <Route exact path="/" component={ Main } />
                    <Route exact path="/about" component={ About } />
                    <Route exact path="/faq" component={ Collapsible } />
                </Switch>
            </Router>
            <Footer />     
        </Fragment>     
    );
}

export default App;