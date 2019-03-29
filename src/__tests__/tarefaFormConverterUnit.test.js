import TarefaFormConverter from '../singleton/tarefaFormConverter';

describe('Helper', function () {
    let originalTimeout;

    beforeEach(function () {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });

    afterEach(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
});

test('testeConvertendoEquilibrio',()=>{
    let equilibrio=
    {
        "id":"1534740683145",
        "Mental":true,
        "Fisico":false,
        "Espiritual":false,
        "Emocional":false
    };
    const tarefaConvertidaEsperada = ["Mental"];
    const tarefaConvertida = TarefaFormConverter.equilibrioFormConverter(equilibrio);
    expect(tarefaConvertida.length).toBe(tarefaConvertidaEsperada.length)
});
test('testeConvertendoTriade',()=>{
    let triade=
        {
            "id":"1534740683145",
            "Importante":true,
            "Circunstancial":false,
            "Urgente":false
        };
    const tarefaConvertidaEsperada = ["Importante"];
    const tarefaConvertida = TarefaFormConverter.triadeFormConverter(triade);
    expect(tarefaConvertida.length).toBe(tarefaConvertidaEsperada.length)
});
test('testeConvertendoTarefa', async () => {
        const tarefa = {
            data: new Date("2018-08-20T00:00:00.000Z"),
            duracao: '\"60m\"',
            id: "1534740683145",
            equilibrioId: "1534740683145",
            nome: '\"Fazer trabalho de grafos\"',
            triadeId: "1534740683145",
            statusId: "c428e5bfa421"
        };
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
        const tarefaConvertida = await TarefaFormConverter.converter(1534740683145);
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 6000000;
        expect(tarefaConvertida.tarefa).toBe(tarefa.nome);
        expect(tarefaConvertida.duracao).toBe(tarefa.duracao);
        expect(tarefaConvertida.calendar.toDateString()).toBe(tarefa.data.toDateString());
        expect(tarefaConvertida.equilibrio.length).toBe(1);
        expect(tarefaConvertida.triade.length).toBe(1);
        expect(tarefaConvertida.papeis.length).toBe(1);
        expect(tarefaConvertida.metas.length).toBe(1)

    }
);

