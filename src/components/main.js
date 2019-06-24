import React from "react";
import {Switch,Route} from "react-router-dom/";
import TabsMenu from "./tabsMenu";
import TarefaForm from "./tarefa-form";
import ListTarefas from "./listTarefas";
import PopulatedForm from "./populatedForm"
import {connect} from "react-redux";
import LoadingOverlay from "react-loading-overlay";

const Main = (loading) => {

    return(
        <LoadingOverlay
            active={loading.loading}
            spinner
            text='carregando'>
            <main>
                <Switch>
                    <Route exact path='/' component={TabsMenu}/>
                    <Route exact path='/tarefaForm/:tarefaId' component={TarefaForm} />
                    <Route exact path='/editForm/:tarefaId' component={PopulatedForm} />
                    <Route exact path='/listTarefas' component={ListTarefas} />
                </Switch>
            </main>
        </LoadingOverlay>)

};
function mapStateToProps(state) {
    return {
        loading: state.loadingReducer.loading
    };
}
export default connect(mapStateToProps)(Main);