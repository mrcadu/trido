import React from 'react';
import Tab from "./tab";
import Tabs from "./tabs";
import TarefaForm from "./tarefa-form";
import ListTarefas from "./listTarefas";

const TabsMenu = ({}) => {
    return (
        <Tabs name="Criar Tarefa">
            <Tab name="Adicionar Tarefa">
                <TarefaForm/>
            </Tab>
            <Tab name="listarTarefas">
                <ListTarefas/>
            </Tab>
        </Tabs>);
};
export default TabsMenu;