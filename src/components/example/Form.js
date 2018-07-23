import React from 'react';
import { connect } from 'react-redux';
import autoBind from "auto-bind";
import {toggle, add_item} from "../../actions/listActions";



class Froms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
        autoBind(this);
    }

    handleInput(e){
        if (e.target.value ) {
            this.setState({input: e.target.value });
        }
    }

    add(){
        let { dispatch } = this.props;
        let { input } = this.state;
        dispatch(add_item(input));
        this.toggle();
    }

    toggle() {
        let { dispatch } = this.props;
        dispatch(toggle());
    }

    render() {
        let {menu} = this.props;
        return (
            <div >
                <button type="button"
                        className="alert button"
                        onClick={this.toggle}
                >+</button>
                { menu && (
                    <div className="input-group">
                        <span className="input-group-label">input</span>
                        <input className="input-group-field"
                               type="text" onChange={this.handleInput} />
                        <div className="input-group-button">
                            <input type="submit"
                                   onClick={this.add}
                                   className="button"
                                   value="Submit" />
                        </div>
                    </div>
                ) }
            </div>
        );
    }


}
let  mapStateToProps = (state) => {
    return {
        menu: state.toggletReducers
    };
};

export default connect(mapStateToProps)(Froms);


