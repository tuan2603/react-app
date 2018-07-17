import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
class Example extends Component {
    render() {
        return (
            <Router>
                <div className="flyout">
                    hello <sayHello />
                </div>
            </Router>
        );
    }
}

export default Example;
