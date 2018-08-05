import React, {Component} from 'react';
import PropTypes from 'proptypes';
import TextInput from "./text-input";
import SelectOne from "./select-one";
import SelectMany from "./select-many";
import Calendar from "./calendar";
import Button from "./button";
import {reduxForm, Field} from "redux-form";

const validateNotEmpty = value => !value ? 'Must enter a value' : null;

class AddTarefa extends Component {


    render() {
        const options = [
            {value: 'importante', label: 'importante'},
            {value: 'circunstancial', label: 'circunstancial'},
            {value: 'urgente', label: 'urgente'}
        ];
        const onSubmit = values => alert(JSON.stringify(values));
        return (
            <form onSubmit={this.props.handleSubmit(onSubmit)}
                  style={{margin: '20px'}}>
                <div style={{marginBottom: '20px'}}>
                    <label className="formLabel">Tarefa</label>
                    <div >
                        <Field label="tarefa"
                               placeholder="Tarefa"
                               name="tarefa"
                               component={TextInput}
                               validate={validateNotEmpty}
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
                               validate={validateNotEmpty}
                               type="text"/>
                    </div>
                </div>

                <Button type="submit" label="Salvar" className="button-save" style={{float: 'right'}}/>
                <Button label="Cancelar" className="button-cancel" style={{float: 'left'}}/>
            </form>
        );
    }
}


AddTarefa.propTypes = {
    handleSubmit : PropTypes.function
};
export default reduxForm({
    form: 'addTarefa',
})(AddTarefa);