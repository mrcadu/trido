class tarefaBancoConverter {
    static triadeConverter = (triade,id) => {
        return {
            'Circunstancial': triade.filter(tr => tr.value === 'Circunstancial').length > 0 ? 1 : 0,
            'Importante': triade.filter(tr => tr.value === 'Importante').length > 0 ? 1 : 0,
            'Urgente': triade.filter(tr => tr.value === 'Urgente').length > 0 ? 1 : 0,
            'id': id,
        };
    };
    static equilibrioConverter = (equilibrio,id) => {
        return {
            'Mental': equilibrio.filter(eq => eq.value === 'Mental').length > 0 ? 1 : 0,
            'Fisico': equilibrio.filter(eq => eq.value === 'Fisico').length > 0 ? 1 : 0,
            'Espiritual': equilibrio.filter(eq => eq.value === 'Espiritual').length > 0 ? 1 : 0,
            'Emocional': equilibrio.filter(eq => eq.value === 'Emocional').length > 0 ? 1 : 0,
            'id': id,
        };
    };
    static metasConverter = (metas,id) => {
        const metaConvertida = [];
        for(const meta in metas){
            if(metas.hasOwnProperty(meta)) {
                let metaAtual = {
                    id: id,
                    nome: meta.value
                };
                metaConvertida.push(metaAtual);
            }
        }
        return metaConvertida;
    };
    static papeisConverter = (papeis,id) => {
        const papeisConvertidos = [];
        for(const papel in papeis){
            if(papeis.hasOwnProperty(papel)) {
                let papelAtual = {
                    id: id,
                    nome: papel.value
                };
                papeisConvertidos.push(papelAtual);
            }
        }
        return papeisConvertidos;
    }
}
export default tarefaBancoConverter;