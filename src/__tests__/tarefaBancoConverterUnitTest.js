import TarefaBancoConverter from '../singleton/tarefaBancoConverter';

let metas = [{"id": 1, "nome": "Dominar bem o Surf"}, {"id": 2, "nome": "Escrever Textos"}, {
    "id": 3,
    "nome": "Terminar o ciclo básico"
}, {"id": 4, "nome": "Criar Músicas de Violão"}, {"id": 5, "nome": "Ter independência Financeira"}, {
    "id": 6,
    "nome": "Trabalhar numa empresa grande"
}, {"id": 7, "nome": "Comprar um New Fiesta"}, {"id": 8, "nome": "Ter Casa Própria"}, {
    "id": 9,
    "nome": "Compromisso"
}];
let papeis = [{"id": 1, "nome": "Amigo"}, {"id": 2, "nome": "Siga"}, {"id": 3, "nome": "Escritor"}, {
    "id": 4,
    "nome": "Esportista"
}, {"id": 5, "nome": "Estudante"}, {"id": 6, "nome": "Familiar"}, {"id": 7, "nome": "Festeiro"}, {
    "id": 8,
    "nome": "Músico"
}];

test('testeConvertendoEquilibrio', () => {
    let equilibrio = [{value: 'Mental', label: 'Mental'}];
    const equilibrioConvertidaEsperada = {
        "mental": true,
        "fisico": false,
        "espiritual": false,
        "emocional": false
    };
    const tarefaBancoConverter = new TarefaBancoConverter(metas, papeis);
    const equilibrioConvertido = tarefaBancoConverter.equilibrioConverter(equilibrio);
    expect(equilibrioConvertido).toEqual(equilibrioConvertidaEsperada);
});
test('testeConvertendoTriade', () => {
    let triade = {value: 'Importante', label: 'Importante'};
    const triadeConvertidaEsperada = {
        "importante": true,
        "circunstancial": false,
        "urgente": false,
    };
    const tarefaBancoConverter = new TarefaBancoConverter(metas, papeis);
    const equilibrioConvertido = tarefaBancoConverter.triadeConverter(triade);
    expect(equilibrioConvertido).toEqual(triadeConvertidaEsperada);
});