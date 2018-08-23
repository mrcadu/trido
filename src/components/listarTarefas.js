import React from 'react';
import ListTarefasHoc from '../HOC/list-tarefas-hoc';
import ListTarefas from './listTarefas';

const ListarTarefas = ({}) => {
  return ListTarefasHoc(<ListTarefas/>)
};

export default ListarTarefas