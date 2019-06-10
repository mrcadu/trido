import TarefaFormConverter from "../singleton/tarefaFormConverter";
import {Component} from "react";
import TarefaForm from "./tarefa-form";
import React from "react";
import TarefaBancoConverter from '../singleton/tarefaBancoConverter';
import axios from "axios";
import WithMetasAndPapeis from "../HOC/withMetasAndPapeis";

class PopulatedForm extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            tarefaPrePopulada: {
                tarefa: "",
                triade: [],
                duracao: "",
                metas: [],
                calendar: new Date(),
                papeis: [],
                equilibrio: []
            }
        };
    }

    onSubmit = (formData) => {
        const tarefaBancoConverter = new TarefaBancoConverter(this.props.metas,this.props.papeis);
        const equilibrioAtual = tarefaBancoConverter.equilibrioConverter(formData.equilibrio);
        const triadeAtual = tarefaBancoConverter.triadeConverter(formData.triade);
        const papeisAtuais = tarefaBancoConverter.papeisConverter(formData.papeis);
        const metasAtuais =  tarefaBancoConverter.metasConverter(formData.metas);
        const id = this.props.match.params.tarefaId;
        const url = process.env.REACT_APP_FETCH_URL;

        const tarefaData = {
            'id':id,
            'nome': `${formData.nome}`,
            'duracao': `${formData.duracao}`,
            'data': formData.data,
            'equilibrio': equilibrioAtual,
            'triade': triadeAtual,
            "statusTarefa": {
                "id": 1,
                "nome": "ativa",
                "codigo": "ATV"
            },
            'metas':metasAtuais,
            'papeis':papeisAtuais,
            'updatedAt':formData.data,
        };
        axios.request({
            method: 'post',
            url: url.concat("/tarefas/"),
            data: tarefaData,
        }).then((response) => {
            console.log(response);
        });

    };

    componentWillMount() {
        const id = this.props.match.params.tarefaId;
        TarefaFormConverter.converter(id, (tarefaConvertida) => this.setState({tarefaPrePopulada: tarefaConvertida})
        );
    }

    render() {
        return (this.state.tarefaPrePopulada.tarefa !== "" ?
                <TarefaForm onSubmit={(formData) => this.onSubmit(formData)}
                            tarefaPrePopulada={this.state.tarefaPrePopulada}/> : (<h1>carregando</h1>)

        );
    }
}

export default WithMetasAndPapeis(PopulatedForm);
