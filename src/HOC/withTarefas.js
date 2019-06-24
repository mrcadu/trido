import React, {Component} from 'react';
import axios from 'axios';
import {load} from "../actions/loadingAction";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

const WithTarefas = (WrappedComponent) => {
    const url = process.env.REACT_APP_FETCH_URL;

    class ListaTarefas extends Component {
        constructor(props) {
            super(props);
            this.state = {
                tarefas: {
                    data: []
                }
            };
        }
        rerender(){
            this.props.load(true);
            axios.request({
                method: 'get',
                url: url.concat('/tarefas/active'),
            }).then(response => {
                    this.setState({tarefas: response});
                    this.props.load(false);
                }
            );
        }
        componentDidMount() {
            this.props.load(true);
            axios.request({
                method: 'get',
                url: url.concat('/tarefas/active'),
            }).then(response => {
                this.setState({tarefas: response});
                this.props.load(false);
            });

        }

        render() {
            return < WrappedComponent rerender={() => {this.rerender()}} tarefas={this.state.tarefas.data} {...this.props}/>;
        }
    }
    function mapDispatchToProps(dispatch) {
        return bindActionCreators({load}, dispatch);
    }
    return connect( mapDispatchToProps)(ListaTarefas);
};
export default WithTarefas;