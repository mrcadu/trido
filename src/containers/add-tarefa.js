import React from 'react'
import AddTarefaHOC from "../HOC/add-tarefa-hoc";
import TarefaFormWithData from "./tarefa-form-with-data";

const AddTarefa = ({}) => {
    return AddTarefaHOC(<TarefaFormWithData/>)
};

export default AddTarefa;