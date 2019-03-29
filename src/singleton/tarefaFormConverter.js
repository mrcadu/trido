import axios from 'axios';
class tarefaFormConverter {
    static async converter(id,funcao) {
        let tarefaConvertida;
        let tarefa = {};
        const url = process.env.REACT_APP_FETCH_URL;
        const filtroTarefaCompleta = '?filter={"include":["metas","papeis","equilibrioId","triade"]}';
        await axios.request({
            method: 'get',
            url: url.concat("/api/tarefas/").concat(id).concat(filtroTarefaCompleta)
        }).then((response) => {
            tarefa = response.data;
            tarefaConvertida = {
                calendar: new Date(tarefa.data),
                duracao: tarefa.duracao,
                equilibrio: this.equilibrioFormConverter(tarefa.equilibrioId),
                metas: this.metasFormConverter(tarefa.metas),
                papeis: this.papeisFormConverter(tarefa.papeis),
                tarefa: tarefa.nome,
                triade: this.triadeFormConverter(tarefa.triade),
            };
            funcao(tarefaConvertida);
        });

    }
    static equilibrioFormConverter(equilibrios) {
        let equilibriosSelecionados = [];
        for (const equilibrio in equilibrios) {
            if (equilibrios.hasOwnProperty(equilibrio) && equilibrios[equilibrio] === true) {
                equilibriosSelecionados.push({
                    label:equilibrio,
                    value:equilibrio
                });
            }
        }
        return equilibriosSelecionados;
    }

    static triadeFormConverter(triades) {
        let triadesSelecionadas = [];
        for (const triade in triades) {
            if (triades.hasOwnProperty(triade) && triades[triade] === true) {
                triadesSelecionadas.push({
                    label:triade,
                    value:triade
                });
            }
        }
        return triadesSelecionadas;
    }

    static metasFormConverter(metas) {
        let metasConvertidas = [];
        for (const meta in metas) {
            if (metas.hasOwnProperty(meta)) {
                metasConvertidas.push({
                    value: metas[meta].nome,
                    label: metas[meta].nome
                })
            }
        }
        return metasConvertidas;
    }
    static papeisFormConverter(papeis){
        let papeisConvertidos = [];
        for(const papel in papeis){
            if(papeis.hasOwnProperty(papel)){
                papeisConvertidos.push({
                    value: papeis[papel].nome,
                    label: papeis[papel].nome
                })
            }
        }
        return papeisConvertidos;
    }
}
export default tarefaFormConverter;