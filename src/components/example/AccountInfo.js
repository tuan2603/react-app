import React from 'react';
import { connect } from 'react-redux';
import autoBind from "auto-bind";
import * as userActions from "../../actions/userActions";


class AccountInfo extends React.Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    logoutHandle(e) {
        e.preventDefault();
        let { dispatch } = this.props;
        dispatch(userActions.logout());
    }

    render() {
        let { username } = this.props;
        let xhtml = username === null ? <SignIn /> : <AccountInfo />;
        return (
            <div >
              <h1> This is account </h1>
               <p>Username: {username }</p>
                <button onClick={this.logoutHandle}  type="button" className="alert button"> Sign out </button>
            </div>
        );
    }
}

let  mapStateToProps = (state) => {
    return {
        username: state.userReducers
    };
};

export default connect(mapStateToProps)(AccountInfo);
