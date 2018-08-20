import React from "react";
import {Switch,Route} from "react-router-dom/";
import TarefaFormWithData from "../containers/tarefa-form-with-data";
import AddTarefa from "../containers/add-tarefa";
import ListTarefas from './listTarefas';

const Main = () => {

    return(
        <main>
            <Switch>
                <Route exact path='/' component={TarefaFormWithData}/>
                <Route exact path='/addTarefa' component={AddTarefa} />
                <Route exact path='/listTarefas' component={ListTarefas} />
            </Switch>
        </main>)

};

export default Main