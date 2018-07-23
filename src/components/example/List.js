import React from 'react';
import { connect } from 'react-redux';
import autoBind from "auto-bind";
import Node from "./Node";
import Form from "./Form";



class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mang: ['Android', 'IOS', 'NodeJS']
        }
        autoBind(this);
    }

    delete(index) {
        let {mang} = this.state;
        mang.splice(index,1);
        this.setState({mang});
    }

    add(v) {
        let {mang} = this.state;
        mang.push(v);
        this.setState({mang});
    }

    render() {
        let {mang} = this.props;
        return (
            <div >
                <Form add={this.add} />
                {mang.map((value, index) =>
                    <Node txt={value} key={index} index={index}
                        remove = { this.delete }
                    />
                )}
            </div>
        );
    }


}
let  mapStateToProps = (state) => {
    return {
        mang: state.listReducers
    };
};

export default connect(mapStateToProps)(List);
