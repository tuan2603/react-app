import React from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.css';
import logo from '../../assets/img/logo.png';

class Nav extends React.Component {
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                   <img src={logo} style={{height:"24px"}}  />
                </div>
                <div className="top-bar-right">
                    <ul className="dropdown menu" data-dropdown-menu>
                        <li><NavLink  to="/" exact activeStyle={{color:"green"}} >Home</NavLink></li>
                        <li><NavLink to="/account" activeStyle={{color:"green"}}>Account</NavLink></li>
                        <li><NavLink to="/transaction" activeStyle={{color:"green"}}>Transaction</NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Nav;
