import React, {Component} from 'react';
import axios from 'axios';

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

        componentDidMount() {
            axios.request({
                method: 'get',
                url: url.concat('/tarefas/active'),
            }).then(response => this.setState({tarefas: response}));
        }

        render() {
            return < WrappedComponent tarefas={this.state.tarefas.data} {...this.props}/>;
        }
    }

    return ListaTarefas;
};
export default WithTarefas;