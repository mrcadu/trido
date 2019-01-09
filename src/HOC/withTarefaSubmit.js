import React from 'react';
import axios from 'axios';
import TarefaBancoConverter from '../singleton/tarefaBancoConverter'
const WithTarefaSubmit = (WrappedComponent) => {

    class TarefaSubmit extends React.Component {
        constructor(props){
            super(props);
            this.onSubmit = this.onSubmit.bind(this);
        }
        onSubmit (formData){
            const newId = new Date().getTime().toString();
            const url = process.env.REACT_APP_FETCH_URL;
            const equilibrioData = TarefaBancoConverter.equilibrioConverter(formData.equilibrio,newId);
            const triadeData = TarefaBancoConverter.triadeConverter(formData.triade,newId);
            let idMetas = new Map();
            let idPapeis = new Map();

            const tarefaData = {
                'id': newId,
                'equilibrioId': newId,
                'triadeId': newId,
                'data': formData.calendar,
                'statusId': '9b270ae6a421',
                'nome': `"${formData.tarefa}"`,
                'duracao': `"${formData.duracao}"`,
            };

            axios.request({
                method: 'post',
                url: url.concat('/api/equilibrios'),
                data: equilibrioData,
            }).then(response => console.log(response));

            axios.request({
                method: 'post',
                url: url.concat('/api/triades'),
                data: triadeData,
            }).then(response => console.log(response));

            axios.request({
                method: 'post',
                //  /api/tarefas/1536685124483?filter={"include":["metas","papeis","equilibrioId","triade"]}
                url: url.concat('/api/tarefas'),
                data: tarefaData,
            }).then(response => console.log(response)).finally(() => {
                    axios.request({
                        method: 'get',
                        url: url.concat('/api/metas'),
                    }).then(response => response.data.forEach((tarefa) => {
                        idMetas.set(tarefa.nome, tarefa.id);
                    })).finally(() => {
                        axios.request({
                            method: 'put',
                            url: url.concat('/api/tarefas/'.concat(newId).concat('/metas/rel/').concat(idMetas.get(formData.metas.value))),
                        }).then(response => console.log(response));
                    });

                    axios.request({
                        method: 'get',
                        url: url.concat('/api/papeis'),
                    }).then(response => response.data.map((tarefa) => idPapeis.set(tarefa.nome, tarefa.id))).finally(() => {
                        formData.papeis.forEach((papel) => {
                            axios.request({
                                method: 'put',
                                url: url.concat('/api/tarefas/'.concat(newId).concat('/papeis/rel/'.concat(idPapeis.get(papel.value)))),
                            }).then(response => console.log(response));
                        });
                    });
                }
            );
        };
        render() {
            return (<WrappedComponent onSubmit={this.onSubmit} {...this.props}/>);
        }
    }

    return TarefaSubmit;
};

export default WithTarefaSubmit;