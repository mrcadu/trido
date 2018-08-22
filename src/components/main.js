import React from "react";
import {Switch,Route} from "react-router-dom/";
import TarefaForm from "./tarefa-form";
import ListTarefas from "./listTarefas";

const Main = () => {

    return(
        <main>
            <Switch>
                <Route exact path='/' component={TarefaForm}/>
                <Route exact path='/addTarefa' component={TarefaForm} />
                <Route exact path='/listTarefas' component={ListTarefas} />
            </Switch>
        </main>)

};

export default Main