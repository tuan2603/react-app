import React from "react";
import {
   Route, Switch
} from "react-router-dom";

import Home from './components/views/Home';
import Account from './components/views/Account';
import Transaction from './components/views/Transaction';
const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/account' component={Account}/>
        <Route exact path='/transaction' component={Transaction}/>
        <Route render = { function() {
            return <h1>Not Found</h1>;
        }} />
    </Switch>
);


export default Routes;
