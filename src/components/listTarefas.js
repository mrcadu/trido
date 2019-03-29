import React from 'react';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import WithTarefas from "../HOC/withTarefas";

const ListTarefas = ({tarefas}) => {
    let diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    return (<div>
        {tarefas.map((tarefa) => {
            return <div key={tarefa.nome}>
                <Link to= {`/editForm/${tarefa.id}`} params={{tarefa:tarefa}} label="editarTarefa">{tarefa.nome}</Link>
                <h4> {tarefa.duracao} </h4>
                <h4> {diasDaSemana[new Date(tarefa.data).getDay() + 1]} </h4>
            </div>;
        })}
    </div>);
};
let withTarefasComponent = WithTarefas(ListTarefas);
let withRouterComponent = withRouter(withTarefasComponent);
export default withRouterComponent;