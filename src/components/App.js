import React, {Component} from 'react';
import '../App.css';
import TarefaFormWithData from "../containers/tarefa-form-with-data";
import Tab from "./tab";
import Tabs from "./tabs";
import Calendar from "./calendar";

class App extends Component {
    render() {
        return (
            <Tabs name="Criar Tarefa">
                <Tab name="teste">
                    <TarefaFormWithData url={'http://localhost:4000'}/>
                </Tab>
                <Tab name = "teste2">
                    <Calendar/>
                </Tab>
                <Tab name="teste3"/>
                <Tab name="teste4"/>
            </Tabs>
        );
    }
}

export default App;
