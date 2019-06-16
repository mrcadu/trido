import React from 'react';
import {Link, withRouter} from 'react-router-dom'
import WithTarefas from "../HOC/withTarefas";
import Button from "./button";
import axios from "axios";


const ListTarefas = ({tarefas,rerender}) => {
    const style = {
        tarefas: {
            border: '1px solid #1abc9c',
            padding: '10px',
            borderRadius: '10px',
            marginBottom: '20px',
            color:'#333333'
        },
        botao:{
            background: "url(trash.png)",
            backgroundSize:'cover',
            float:'right',
            backgroundColor:'red',
            height:'20px',
            width:'20px',

        },
        link:{
            textDecoration:'none',
            color:'#333333'
        },
        texto:{
            margin:'0px',
            color:'#333333'
        }
    };
    const url = process.env.REACT_APP_FETCH_URL;
    let diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const removerTarefa = (id) => {
        axios.delete(url.concat('/tarefas/' + id)).then(
            () => {
                rerender();
                console.log('{tarefa com o id ' + id + ' foi removida')
            }
        );
    };
    return (<div>
        {tarefas.map((tarefa) => {
            return <div style={style.tarefas} key={tarefa.id}>
                <Link to= {`/editForm/${tarefa.id}`} params={{tarefa:tarefa}} label="editarTarefa">{tarefa.nome}[{tarefa.duracao}]</Link>
                <Button onClick={() => removerTarefa(tarefa.id)} style={style.botao}/>
                <h4 style={style.texto}> {diasDaSemana[new Date(tarefa.data).getDay() + 1]} </h4>
            </div>;
        })}
    </div>);
};
let withTarefasComponent = WithTarefas(ListTarefas);
let withRouterComponent = withRouter(withTarefasComponent);
export default withRouterComponent;