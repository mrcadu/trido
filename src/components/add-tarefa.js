import React, {Component} from 'react';
import PropTypes from 'proptypes';
import TextInput from "./text-input";
import SelectOne from "./select-one";
import SelectMany from "./select-many";
import Calendar from "./calendar";
import Button from "./button";
import {reduxForm, Field} from "redux-form";

class AddTarefa extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}
                  style={{margin: '20px'}}>
                <div style={{marginBottom: '20px'}}>
                    <label className="formLabel">Tarefa</label>
                    <div>
                        <Field label="tarefa"
                               placeholder="Tarefa"
                               name="tarefa"
                               component={TextInput}
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
                               component={TextInput}
                               type="text"/>
                    </div>
                </div>
                <div style={{marginBottom: '20px'}}>
                    <label className="formLabel">Equilíbrio</label>
                    <Field label="equilibrio"
                           placeholder="Equilíbrio"
                           name="equilibrio"
                           component={SelectMany}
                           style={{marginBottom: '20px'}}/>
                </div>
                <div style={{marginBottom: '20px'}}>
                    <label className="formLabel"> Metas </label>
                    <Field label="metas"
                           placeholder="Metas"
                           name="metas"
                           component={SelectOne}/>
                </div>
                <div style={{marginBottom: '20px'}}>
                    <label className="formLabel"> Papéis </label>
                    <Field label="papeis"
                           placeholder="Papéis"
                           name="papeis"
                           component={SelectMany}/>
                </div>

                <div align="center" style={{marginBottom: '20px'}}>
                    <Field label="papeis"
                           placeholder="Papéis"
                           name="papeis"
                           component={Calendar}
                           style={{width: '40%'}}/>
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


AddTarefa.propTypes = {
    handleSubmit: PropTypes.func,
    onSubmit : PropTypes.func
};
export default reduxForm({
    form: 'addTarefa',
})(AddTarefa);