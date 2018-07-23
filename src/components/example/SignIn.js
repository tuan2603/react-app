import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as userActions from '../../actions/userActions';
import {show_notification} from '../../actions/notifyActions';
import {login} from '../../helpers';
import autoBind from 'auto-bind';


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: {
                username: "khoapham",
                password: "123",
            },
            submitted: false
        }

        autoBind(this);
    }

    usernameHandle(e) {
        let {username} = this.state;
        username.username = e.target.value;
        this.setState({username});
    }

    passwordHandle(e) {
        let {username} = this.state;
        username.password = e.target.value;
        this.setState({username});
    }

    handleSubmit(e) {
        e.preventDefault();
        //console.log(this.state.username);
        this.setState({submitted:true});
        const { dispatch } = this.props;
        let {username , password } = this.state.username;
        login(username,password)
            .then(user => {
                if (user.value === "dang_nhap_thanh_cong") {
                    dispatch(userActions.login(username));
                } else {
                    dispatch(show_notification("dang nhap sai ten hoac mat khau"));
                }
            });

    }

    render() {
        let {username} = this.state.username;

        return (
            <div>
                <form>
                    <div className="grid-container">
                        <div className="grid-x grid-padding-x">
                            <div className="medium-6 cell">
                                <label>Username
                                    <input type="text"
                                           placeholder="username"
                                           onChange={this.usernameHandle}
                                           value={username}
                                    />
                                </label>
                            </div>
                            <div className="medium-6 cell">
                                <label>Password
                                    <input type="password" placeholder="password" onChange={this.passwordHandle}/>
                                </label>
                            </div>

                            <button  type="button" className="success button" onClick={this.handleSubmit}> Sign In</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


export default connect()(SignIn);
