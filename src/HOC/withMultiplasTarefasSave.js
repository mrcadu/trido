import React from 'react';
import axios from 'axios';
import {connect} from "react-redux";
import {load} from "../actions/loadingAction";
import {bindActionCreators} from "redux";
const WithMultiplasTarefasSave = (WrappedComponent) => {

    class MultiplasTarefasSave extends React.Component {
        constructor(props){
            super(props);
            this.onClick = this.onClick.bind(this);
        }
        onClick (tarefas){
            this.props.load(true);
            const url = process.env.REACT_APP_FETCH_URL;
            tarefas.forEach((dia)=>{
                dia.forEach((tarefa)=>{
                    axios.request({
                        method: 'post',
                        url: url.concat('/tarefas'),
                        data: tarefa,
                    }).then(response => {
                        console.log(response);
                    });
                });

            });
            this.props.load(false);
        };
        render() {
            return (<WrappedComponent onClick={this.onClick} {...this.props}/>);
        }

    }
    function mapDispatchToProps(dispatch) {
        return bindActionCreators({load}, dispatch);
    }
    function mapStateToProps(state) {
        return {
            loading: state.loadingReducer.loading
        };
    }
    return connect(mapStateToProps,mapDispatchToProps)(MultiplasTarefasSave);
};

export default WithMultiplasTarefasSave;