import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextInput from "./text-input";
import SelectOne from "./select-one";
import SelectMany from "./select-many";
import Calendar from "./calendar";
import Button from "./button";
import {reduxForm, Field} from "redux-form";
import WithTarefaSubmit from "../HOC/withTarefaSubmit";
import WithMetasAndPapeis from "../HOC/withMetasAndPapeis";

class TarefaForm extends Component {
    componentWillMount() {
        if (this.props.tarefaPrePopulada != null) {
            this.props.initialize(this.props.tarefaPrePopulada)
        }
        else{
            this.props.initialize({
                tarefa: "",
                triade: [],
                duracao: "",
                metas: [],
                calendar: new Date(),
                papeis: [],
                equilibrio: []
            });
        }
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}
                  style={{margin: '20px'}}>

                <div style={{marginBottom: '20px'}}>
                    <label className="formLabel">Tarefa</label>
                    <div>
                        <Field label="tarefa"
                               name="tarefa"
                               component={props =>
                                   <TextInput
                                       value={props.input.value}
                                       handleChange={param => props.input.onChange(param.target.value)}
                                       placeholder="Tarefa"/>}
                               type="text"
                               className="formElement"/>
                    </div>
                </div>

                <div style={{marginBottom: '20px'}}>
                    <label className="formLabel">Duração</label>
                    <div>
                        <Field label="duracao"
                               placeholder="Duração"
                               name="duracao"
                               component={props =>
                                   <TextInput
                                       value={props.input.value}
                                       handleChan ge={param => props.input.onChange(param.target.value)}
                                       placeholder="Duração"/>}
                               type="text"/>
                    </div>
                </div>

                <div style={{width: '100%'}}>

                    <div style={{marginBottom: '20px', width: '45%', float: 'right'}}>
                        <label className="formLabel">Equilíbrio</label>
                        <Field label="equilibrio"
                               placeholder="Equilíbrio"
                               name="equilibrio"
                               component={props =>
                                   <SelectMany
                                       value={props.input.value}
                                       options={[
                                           {value: 'Mental', label: 'Mental'},
                                           {value: 'Fisico', label: 'Físico'},
                                           {value: 'Espiritual', label: 'Espiritual'},
                                           {value: 'Emocional', label: 'Emocional'}
                                       ]}
                                       placeholder="Duração"
                                       handleChange={(selectedOption) => props.input.onChange(selectedOption)}/>}/>
                    </div>

                    <div style={{marginBottom: '20px', width: '45%'}}>
                        <label className="formLabel">Tríade</label>
                        <Field label="triade"
                               placeholder="Tríade"
                               name="triade"
                               component={props =>
                                   <SelectMany
                                       value={props.input.value}
                                       options={[
                                           {value: 'Importante', label: 'Importante'},
                                           {value: 'Circunstancial', label: 'Circunstancial'},
                                           {value: 'Urgente', label: 'Urgente'}
                                       ]}
                                       placeholder="Duração"
                                       handleChange={(selectedOption) => props.input.onChange(selectedOption)}/>}/>
                    </div>

                </div>

                <div style={{marginBottom: '20px'}}>
                    <label className="formLabel"> Metas </label>
                    <Field label="metas"
                           placeholder="Metas"
                           name="metas"
                           component={props =>
                               <SelectOne
                                   value={props.input.value}
                                   options={this.props.metas}
                                   placeholder="Duração"
                                   handleChange={(selectedOption) => props.input.onChange(selectedOption)}/>}/>
                </div>

                <div style={{marginBottom: '20px'}}>
                    <label className="formLabel"> Papéis </label>
                    <Field label="papeis"
                           placeholder="Papéis"
                           name="papeis"
                           component={props =>
                               <SelectMany
                                   value={props.input.value}
                                   options={this.props.papeis}
                                   placeholder="Duração"
                                   handleChange={(selectedOption) => props.input.onChange(selectedOption)}/>}/>
                </div>

                <div style={{marginBottom: '20px', width: '100%'}}>
                    <Field label="calendar"
                           placeholder="calendar"
                           name="calendar"
                           type="date"
                           component={props =>
                               <Calendar
                                   style={{width: '70%', margin: '0 auto'}}
                                   value={props.input.value}
                                   handleChange={(selectedOption) => props.input.onChange(selectedOption)}/>}
                    />
                </div>

                <Button type="submit"
                        label="Salvar"
                        className="button-save"
                        style={{float: 'right'}}/>

                <Button label="Cancelar" className="button-cancel" style={{float: 'left'}}/>
            </form>
        );
    }
}


TarefaForm.propTypes = {
    tarefaPrePopulada:PropTypes.object,
    id: PropTypes.string,
    handleSubmit: PropTypes.func,
    onSubmit: PropTypes.func,
    metas: PropTypes.array,
    papeis: PropTypes.array,
    tarefa: PropTypes.string
};
let withOptions = WithMetasAndPapeis(TarefaForm);
let withForm = reduxForm({
    form: 'addTarefa',
})(withOptions);

let withSubmit = WithTarefaSubmit(withForm);

export default withSubmit;