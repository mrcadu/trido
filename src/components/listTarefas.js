import React from 'react';
import Button from './button';
import WihTarefas from "../HOC/wihTarefas";

const ListTarefas = ({tarefas, handleClick}) => {
  let diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  return (<div>
    {tarefas.map((tarefa) => {
      return <div>
        <h4> {tarefa.nome} </h4>
        <h4> {tarefa.duracao} </h4>
        <h4> {diasDaSemana[new Date(tarefa.data).getDay() + 1]} </h4>
        <Button style={{}} label="Terminar Tarefa" onClick={(e) => handleClick(e,tarefa)} />
      </div>
    })}
  </div>)
};

export default WihTarefas(ListTarefas);