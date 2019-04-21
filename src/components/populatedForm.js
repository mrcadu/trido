import TarefaFormConverter from "../singleton/tarefaFormConverter";
import {Component} from "react";
import TarefaForm from "./tarefa-form";
import React from "react";
import TarefaBancoConverter from '../singleton/tarefaBancoConverter';
import axios from "axios";

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
        const equilibrioAtual = TarefaBancoConverter.equilibrioConverter(formData.equilibrio);
        const triadeAtual = TarefaBancoConverter.triadeConverter(formData.triade);
        const papeisAtuais = TarefaBancoConverter.papeisConverter(formData.papeis);
        const idPapeis = new Map();
        const idMetas = new Map();
        const id = this.props.match.params.tarefaId;
        const url = process.env.REACT_APP_FETCH_URL;
        const tarefaFinal = {
            tarefa: {
                id: id,
                nome: formData.tarefa,
                duracao: formData.duracao,
                data: formData.calendar,
                equilibrioId: id,
                triadeId: id,
                statusId: "9b270ae6a421",
            },
            equilibrio: equilibrioAtual,
            metas: formData.metas,
            papeis: papeisAtuais,
            triade: triadeAtual
        };
        axios.request({
            method: 'put',
            url: url.concat("/api/tarefas/"),
            data: tarefaFinal.tarefa
        }).then((response) => {
            console.log(response);
        });
        axios.request({
            method: 'put',
            url: url.concat("/api/tarefas/").concat(id).concat("/equilibrioId"),
            data: tarefaFinal.equilibrio
        }).then((response) => {
            console.log(response);
        });
        axios.request({
            method: 'put',
            url: url.concat("/api/tarefas/").concat(id).concat("/triade"),
            data: tarefaFinal.triade
        }).then((response) => {
            console.log(response);
        });
        axios.request({
            method: 'get',
            url: url.concat('/api/papeis'),
        }).then(response => response.data.forEach((papel) => {
            idPapeis.set(papel.nome, papel.id);
        })).then(() => {
            axios.request({
                method: 'delete',
                url: url.concat("/api/tarefas/").concat(id).concat("/papeis"),
                data: {id: id}
            }).then(() => {
                tarefaFinal.papeis.forEach((papel) => {
                    axios.request({
                        method: 'put',
                        url: url.concat('/api/tarefas/'.concat(id).concat('/papeis/rel/'.concat(idPapeis.get(papel.nome)))),
                        data:{
                            tarefasId:id,
                            papeisId:idPapeis.get(papel)
                        }
                    });
                });
            });
        });

        axios.request({
            method: 'get',
            url: url.concat('/api/metas'),
        }).then(response => response.data.forEach((meta) => {
            idMetas.set(meta.nome, meta.id);
        })).then(() => {
            axios.request({
                method: 'delete',
                url: url.concat("/api/tarefas/").concat(id).concat("/metas"),
                data: {id: id}
            }).finally(() => {
                axios.request({
                    method: 'put',
                    url: url.concat('/api/tarefas/'.concat(id).concat('/metas/rel/'.concat(idMetas.get(formData.metas.value)))),
                    data:{
                        tarefasId:id,
                        metasId:idMetas.get(formData.metas.value)
                    }
                });
            });
        });
    };

    componentWillMount() {
        const id = this.props.match.params.tarefaId;
        TarefaFormConverter.converter(id, (tarefaConvertida) => this.setState({tarefaPrePopulada: tarefaConvertida}));
    }

    render() {
        return (this.state.tarefaPrePopulada.tarefa !== "" ?
                <TarefaForm onSubmit={(formData) => this.onSubmit(formData)}
                            tarefaPrePopulada={this.state.tarefaPrePopulada}/> : (<h1>carregando</h1>)

        );
    }
}

export default PopulatedForm;
