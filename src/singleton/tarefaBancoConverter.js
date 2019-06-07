class tarefaBancoConverter {
    constructor(metasIdMap,papeisIdMap){
        let metasId = new Map();
        let papeisId = new Map();
        for(let i = 0;i< metasIdMap.length;i++){
            metasId.set(metasIdMap[i].value,i+1)
        }
        for(let i = 0;i< papeisIdMap.length;i++){
            papeisId.set(papeisIdMap[i].value,i+1)
        }
        this.metasId = metasId;
        this.papeisId = papeisId;
    }
    triadeConverter = (triade) => {
        return {
            'Circunstancial': triade.filter(tr => tr.value === 'Circunstancial').length > 0 ? 1 : 0,
            'Importante': triade.filter(tr => tr.value === 'Importante').length > 0 ? 1 : 0,
            'Urgente': triade.filter(tr => tr.value === 'Urgente').length > 0 ? 1 : 0,
        };
    };
    equilibrioConverter = (equilibrio) => {
        return {
            'Mental': equilibrio.filter(eq => eq.value === 'Mental').length > 0 ? 1 : 0,
            'Fisico': equilibrio.filter(eq => eq.value === 'Fisico').length > 0 ? 1 : 0,
            'Espiritual': equilibrio.filter(eq => eq.value === 'Espiritual').length > 0 ? 1 : 0,
            'Emocional': equilibrio.filter(eq => eq.value === 'Emocional').length > 0 ? 1 : 0,
        };
    };
    metasConverter = (metas) => {
        const metaConvertida = [];
        for(const meta in metas){
            if(metas.hasOwnProperty(meta)) {
                let metaAtual = {
                    id:this.metasId.get(metas[meta].value),
                    nome: metas[meta].value
                };
                metaConvertida.push(metaAtual);
            }
        }
        return metaConvertida;
    };
    papeisConverter = (papeis) => {
        const papeisConvertidos = [];
        for(const papel in papeis){
            if(papeis.hasOwnProperty(papel)) {
                let papelAtual = {
                    id:this.papeisId.get(papeis[papel].value),
                    nome: papeis[papel].value
                };
                papeisConvertidos.push(papelAtual);
            }
        }
        return papeisConvertidos;
    }
}
export default tarefaBancoConverter;