import React from "react";
import {Switch,Route} from "react-router-dom/";
import TabsMenu from "./TabsMenu";
import TarefaForm from "./tarefa-form";
import ListTarefas from "./listTarefas";
import PopulatedForm from "./populatedForm"

const Main = () => {

    return(
        <main>
            <Switch>
                <Route exact path='/' component={TabsMenu}/>
                <Route exact path='/tarefaForm/:tarefaId' component={TarefaForm} />
                <Route exact path='/editForm/:tarefaId' component={PopulatedForm} />
                <Route exact path='/listTarefas' component={ListTarefas} />
            </Switch>
        </main>)

};

export default Main