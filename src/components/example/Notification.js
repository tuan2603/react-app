import React from 'react';
import { connect } from 'react-redux';
import autoBind from "auto-bind";
import {hide_notification} from "../../actions/notifyActions";



class Notification extends React.Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }
    render() {
        return (
            <div >
               <p>{this.props.txt}</p>
            </div>
        );
    }

    componentDidMount() {
        let { dispatch } = this.props;
        setTimeout(()=>{
            dispatch(hide_notification());
        },3000);
    }
}


export default connect()(Notification);
