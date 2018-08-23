import React from 'react';
import AddTarefa from "../containers/add-tarefa";
import ListarTarefas from "./listarTarefas";
import Tab from "./tab";
import Tabs from "./tabs";

const TabsMenu = ({}) => {
    return (<Tabs name="Criar Tarefa">
        <Tab name="Adicionar Tarefa">
            <AddTarefa url={'http://localhost:3001'}/>
        </Tab>
        <Tab name="listarTarefas">
            <ListarTarefas/>
        </Tab>
    </Tabs>)
};
export default TabsMenu;