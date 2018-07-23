import React from 'react';
import { connect } from 'react-redux';
import autoBind from "auto-bind";
import {hide_notification} from "../../actions/notifyActions";



class Note extends React.Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    remove(){
        let { index, remove } = this.props;
        remove(index);
    }

    render() {
        return (
            <div >
               <p>{this.props.txt}</p>
                <button type="button"
                        className="success button"
                        onClick={this.remove}
                >Delete</button>
            </div>
        );
    }


}


export default Note;
