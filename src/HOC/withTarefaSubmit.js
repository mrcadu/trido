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
            const url = process.env.REACT_APP_FETCH_URL;
            const equilibrio = TarefaBancoConverter.equilibrioConverter(formData.equilibrio);
            const triade = TarefaBancoConverter.triadeConverter(formData.triade);
            const metas = TarefaBancoConverter.metasConverter();
            const papeis = TarefaBancoConverter.papeisConverter();

            const tarefaData = {
                'metas':formData.metas,
                'papeis':formData.papeis,
                'equilibrio': equilibrio,
                'triade': triade,
                'data': formData.data,
                "statusTarefa": {
                    "id": 1,
                    "nome": "ativa",
                    "codigo": "ATV"
                },
                'nome': `"${formData.nome}"`,
                'duracao': `"${formData.duracao}"`,
            };

            axios.request({
                method: 'post',
                url: url.concat('/api/tarefas'),
                data: tarefaData,
            }).then(response => console.log(response));
        };
        render() {
            return (<WrappedComponent onSubmit={this.onSubmit} {...this.props}/>);
        }
    }

    return TarefaSubmit;
};

export default WithTarefaSubmit;