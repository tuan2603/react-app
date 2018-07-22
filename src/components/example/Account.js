import React from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';
import SignIn from './SignIn';
import AccountInfo from './AccountInfo';

class Account extends React.Component {
    render() {
        let { username } = this.props;
        let xhtml = username === null ? <SignIn /> : <AccountInfo />;
        return (
            <div >
               <Nav />
                Account
                {xhtml}
            </div>
        );
    }
}

let  mapStateToProps = (state) => {
    return {
        username: state.userReducers
    };
};

export default connect(mapStateToProps)(Account);
