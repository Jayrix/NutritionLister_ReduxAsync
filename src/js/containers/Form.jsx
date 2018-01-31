import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchNutrients} from "../actions/thunks";

class Form extends Component{

    constructor(props){
        super(props);

    }

    render(){

    }

}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: text => {
            dispatch(fetchNutrients(text))
        }
    }
};

const Form = connect(mapDispatchToProps)(Form);

export default Form;