import React, {Component} from 'react';
import {Router} from 'react-router-dom';

import Routes from "../Routes";
import {checklogin} from "../helpers";
import * as userActions from "../actions/userActions";
import autoBind from "auto-bind";
import axios from "axios";
import {connect} from "react-redux";
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

class App extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }
    componentDidMount(){
        const { dispatch } = this.props;
        // checklogin().then(user => {
        //     console.log(user);
        //         if (user.value !== "chua_dang_nhap") {
        //             dispatch(userActions.login(user.value));
        //         }
        //     });

        axios.get('/api/get-info')
            .then(res => {
                console.log(res);
                if(res.data.value !== 'chua_dang_nhap'){
                    dispatch(userActions.login(user.value));
                }
            })
            .catch(err => console.log('LOI get-info'))
    }

    render() {
        return (
            <Router history={history}>
                <main>
                    <Routes  />
                </main>
            </Router>
        );
    }
}
export default connect()(App);

