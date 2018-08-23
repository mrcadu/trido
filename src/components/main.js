import React from "react";
import {Switch,Route} from "react-router-dom/";
import AddTarefa from "../containers/add-tarefa";
import ListTarefas from './listTarefas';
import TabsMenu from "./TabsMenu";

const Main = () => {

    return(
        <main>
            <Switch>
                <Route exact path='/' component={TabsMenu}/>
                <Route exact path='/addTarefa' component={AddTarefa} />
                <Route exact path='/listTarefas' component={ListTarefas} />
            </Switch>
        </main>)

};

export default Main