import React from 'react';
import axios from 'axios';
import TarefaBancoConverter from '../singleton/tarefaBancoConverter'
import WithMetasAndPapeis from "./withMetasAndPapeis";
import {connect} from "react-redux";
import {load} from "../actions/loadingAction";
import {bindActionCreators} from "redux";
const WithTarefaSubmit = (WrappedComponent) => {

    class TarefaSubmit extends React.Component {
        constructor(props){
            super(props);
            this.onSubmit = this.onSubmit.bind(this);
        }
        onSubmit (formData){
            this.props.load(true);
            const url = process.env.REACT_APP_FETCH_URL;
            const tarefaBancoConverter = new TarefaBancoConverter(this.props.metas,this.props.papeis);
            const equilibrio = tarefaBancoConverter.equilibrioConverter(formData.equilibrio);
            const triade = tarefaBancoConverter.triadeConverter(formData.triade);
            const metas = tarefaBancoConverter.metasConverter(formData.metas);
            const papeis = tarefaBancoConverter.papeisConverter(formData.papeis);

            const tarefaData = {
                'metas':metas,
                'papeis':papeis,
                'equilibrio': equilibrio,
                'triade': triade,
                'data': formData.data,
                "statusTarefa": {
                    "id": 1,
                    "nome": "ativa",
                    "codigo": "ATV"
                },
                'nome': `${formData.nome}`,
                'duracao': `${formData.duracao}`,
                'updatedAt':formData.data,
            };

            axios.request({
                method: 'post',
                url: url.concat('/tarefas'),
                data: tarefaData,
            }).then(response => {
                console.log(response);
                this.props.load(false);
            });
        };
        render() {
            return (<WrappedComponent onSubmit={this.onSubmit} {...this.props}/>);
        }
    }
    function mapDispatchToProps(dispatch) {
        return bindActionCreators({load}, dispatch);
    }
    const withMetasAndPapeis = WithMetasAndPapeis(TarefaSubmit);
    return connect(mapDispatchToProps)(withMetasAndPapeis);
};

export default WithTarefaSubmit;