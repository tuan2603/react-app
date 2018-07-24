import React from 'react';
import { connect } from 'react-redux';
import autoBind from "auto-bind";
import {hide_notification} from "../../actions/notifyActions";
import listReducers from "../../reducers/listReducers";
import {remove_item} from "../../actions/listActions";



class Note extends React.Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    remove(){
        let { dispatch, index } = this.props;
        dispatch(remove_item(index));
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

let  mapStateToProps = (state) => {
    return {
        menu: state.listReducers
    };
};

export default connect(mapStateToProps)(Note);
