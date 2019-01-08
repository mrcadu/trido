import TarefaFormConverter from "../singleton/tarefaFormConverter";
import {Component} from "react";
import TarefaForm from "./tarefa-form"
import React from "react";

class PopulatedForm extends Component {
    constructor(props) {
        super(props);
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

    componentWillMount() {
        const id = this.props.match.params.tarefaId;
        TarefaFormConverter.converter(id,(tarefaConvertida) => this.setState({tarefaPrePopulada: tarefaConvertida}));
    }
    render() {
        return (<TarefaForm tarefaPrePopulada={this.state.tarefaPrePopulada}/>)
    }
}
export default PopulatedForm;
