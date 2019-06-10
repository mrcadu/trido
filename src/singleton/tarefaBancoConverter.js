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
            'circunstancial': triade.value === 'Circunstancial',
            'importante': triade.value === 'Importante',
            'urgente': triade.value === 'Urgente',
        };
    };
    equilibrioConverter = (equilibrio) => {
        return {
            'mental': equilibrio.filter(eq => eq.value === 'Mental').length > 0,
            'fisico': equilibrio.filter(eq => eq.value === 'Fisico').length > 0,
            'espiritual': equilibrio.filter(eq => eq.value === 'Espiritual').length > 0 ,
            'emocional': equilibrio.filter(eq => eq.value === 'Emocional').length > 0 ,
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