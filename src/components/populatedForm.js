import TarefaFormConverter from "../singleton/tarefaFormConverter";
import {Component} from "react";
import TarefaForm from "./tarefa-form"
import React from "react";
import TarefaBancoConverter from '../singleton/tarefaBancoConverter'
import axios from "axios";

class PopulatedForm extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            tarefaPrePopulada:{
                tarefa: "",
                triade: [],
                duracao: "",
                metas: [],
                calendar: new Date(),
                papeis: [],
                equilibrio: []}
        };
    }
    onSubmit = (formData) =>{
        const tarefaAtual  = this.state.tarefaPrePopulada;
        const equilibrioAtual = TarefaBancoConverter.equilibrioConverter(tarefaAtual.equilibrio);
        const triadeAtual = TarefaBancoConverter.triadeConverter(tarefaAtual.triade);
        const metasAtuais = TarefaBancoConverter.metasConverter(tarefaAtual.metas);
        const papeisAtuais = TarefaBancoConverter.papeisConverter(tarefaAtual.papeis);
        const id = this.props.match.params.tarefaId;
        const url = process.env.REACT_APP_FETCH_URL;
        const tarefaFinal = {
            tarefa:{
                id: id,
                nome: formData.tarefa,
                duracao: formData.duracao,
                data: formData.calendar,
                equilibrioId: id,
                triadeId:id
            },
            equilibrio : equilibrioAtual,
            metas: metasAtuais,
            papeis: papeisAtuais,
            triade: triadeAtual
        };
        axios.request({
            method: 'put',
            url: url.concat("/api/tarefas/").concat(id),
            data:tarefaFinal.tarefa
        }).then(()=>{return null});
    };
    componentWillMount() {
        const id = this.props.match.params.tarefaId;
        TarefaFormConverter.converter(id,(tarefaConvertida) => this.setState({tarefaPrePopulada: tarefaConvertida}));
    }
    render() {
        return ( this.state.tarefaPrePopulada.tarefa !== "" ? <TarefaForm onSubmit = {(formData) => this.onSubmit(formData)} enableReinitialize={true} initialized={false} tarefaPrePopulada={this.state.tarefaPrePopulada}/>: (<h1>carregando</h1>)

        )
    }
}
export default PopulatedForm;
