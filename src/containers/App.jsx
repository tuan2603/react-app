import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from "../Routes";
import {checklogin} from "../helpers";
import {login} from "../actions/userActions";
import autoBind from "auto-bind";
import Notification from "../components/example/Notification";
import {connect} from "react-redux";


class App extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }


    render() {
        let  { notification } = this.props ;
        let xhtml =   ( notification != null) ? <Notification txt={notification} /> : null;

        return (
            <BrowserRouter >
                <main>
                    {xhtml}
                    <Routes  />
                </main>
            </BrowserRouter>
        );
    }

    componentDidMount(){
        const { dispatch } = this.props;
        checklogin().then(user => {
            console.log(user);
            if (user.value !== "chua_dang_nhap") {
                dispatch(login(user.value));
            }
        });

    }
}

function mapStateToProps(state) {
    return {
        notification: state.notifyReducers
    };
}

export default connect(mapStateToProps)(App);

