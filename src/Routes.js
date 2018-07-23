import React from "react";
import {
   Route, Switch, Redirect
} from "react-router-dom";

import Home from './components/views/Home';
import home from './components/example/home';
import coreui from './components/views/coreui';
import sufee from './components/views/sufee';
import Account from './components/example/Account';
import Transaction from './components/example/Transaction';
import List from './components/example/List';
import { store } from './helpers';


const Routes = () => (
    <Switch>
        <Route exact path='/' component={home}/>
        <Route exact path='/account' component={Account}/>
        <Route exact path='/transaction'  render={() => (
            store.getState().userReducers === null ?
                (<Redirect to='/' />) : (< Transaction />)
        )} />
        <Route exact path='/list'   component={List} />
        <Route render = { function() {
            return <h1>Not Found</h1>;
        }} />
    </Switch>
);


export default Routes;
