import React from 'react';
import {Link, withRouter} from 'react-router-dom'
import WithTarefas from "../HOC/withTarefas";
import Button from "./button";
import axios from "axios";
import {connect} from "react-redux";
import {load} from "../actions/loadingAction";
import {bindActionCreators} from "redux";


const ListTarefas = ({tarefas,rerender,load}) => {
    const style = {
        tarefas: {
            border: '1px solid #1abc9c',
            padding: '10px',
            borderRadius: '10px',
            marginBottom: '20px',
            color:'#333333'
        },
        botaoExcluir:{
            background: "url(trash.png)",
            backgroundSize:'cover',
            float:'right',
            backgroundColor:'red',
            height:'20px',
            width:'20px',
            marginRight:'5px'
        },
        botaoConfirmar:{
            background: 'url("confirm.png")',
            backgroundSize:'cover',
            float:'right',
            backgroundColor:'white',
            height:'20px',
            width:'20px',
            marginRight:'5px'
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
        load(true);
        axios.delete(url.concat('/tarefas/' + id)).then(
            () => {
                rerender();
                console.log('tarefa com o id ' + id + ' foi removida')
            }
        );
    };
    const concluirTarefa = (id) => {
        load(true);
        axios.put(url.concat('/tarefas/' + id + '/complete')).then(
            () => {
                rerender();
                console.log('tarefa com o id ' + id + ' foi concluida')
            }
        );
    };
    return (<div>
        {tarefas.map((tarefa) => {
            return <div style={style.tarefas} key={tarefa.id}>
                <Link style={style.link} to= {`/editForm/${tarefa.id}`} params={{tarefa:tarefa}} label="editarTarefa">{tarefa.nome}[{tarefa.duracao}]</Link>
                <Button onClick={() => removerTarefa(tarefa.id)} style={style.botaoExcluir}/>
                <Button onClick={() => concluirTarefa(tarefa.id)} style={style.botaoConfirmar}/>
                <h4 style={style.texto}> {diasDaSemana[new Date(tarefa.data).getDay()]} </h4>
            </div>;
        })}
    </div>);
};
function mapDispatchToProps(dispatch) {
    return bindActionCreators({load}, dispatch);
}
function mapStateToProps(state) {
    return {
        loading: state.loadingReducer.loading
    };
}
let withTarefasComponent = WithTarefas(ListTarefas);
let withReduxComponent = connect(mapStateToProps, mapDispatchToProps)(withTarefasComponent);
export default withRouter(withReduxComponent);