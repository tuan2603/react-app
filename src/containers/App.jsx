import React, {Component} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import Routes from "../Routes";
import {checklogin} from "../helpers";
import * as userActions from "../actions/userActions";
import autoBind from "auto-bind";
import {connect} from "react-redux";


class App extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }


    render() {
        return (
            <Router >
                <main>
                    <Routes  />
                </main>
            </Router>
        );
    }

    componentDidMount(){
        const { dispatch } = this.props;
        checklogin().then(user => {
            console.log(user);
            if (user.value !== "chua_dang_nhap") {
                dispatch(userActions.login(user.value));
            }
        });

    }
}
export default connect()(App);

