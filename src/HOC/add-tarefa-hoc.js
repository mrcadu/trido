import React from 'react';
import axios from 'axios';

function AddTarefaHoc(component) {
  const newId = new Date().getTime().toString();
  const equilibrioConverter = (equilibrio) => {
    return {
      'Mental': equilibrio.filter(eq  => eq.value === 'Mental').length > 0 ? 1 : 0,
      'Fisico': equilibrio.filter(eq  => eq.value === 'Fisico').length > 0 ? 1 : 0,
      'Espiritual': equilibrio.filter(eq  => eq.value === 'Espiritual').length > 0 ? 1 : 0,
      'Emocional': equilibrio.filter(eq  => eq.value === 'Emocional').length > 0 ? 1 : 0,
      'id': newId,
    };
  };
  const triadeConverter = (triade) => {
    return {
      'Circunstancial': triade.filter(tr  => tr.value === 'Circunstancial').length > 0 ? 1 : 0,
      'Importante': triade.filter(tr  => tr.value === 'Importante').length > 0 ? 1 : 0,
      'Urgente': triade.filter(tr  => tr.value === 'Urgente').length > 0 ? 1 : 0,
      'id': newId,
    };
  };
  const onSubmit = (formData) => {
    const url = component.props.url;
    const equilibrioData = equilibrioConverter(formData.equilibrio);
    const triadeData = triadeConverter(formData.triade);
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
      url: url.concat('/api/tarefas'),
      data: tarefaData,
    }).then(response => console.log(response)).finally( () => {
      axios.request({
        method: 'get',
        url: url.concat('/api/metas'),
      }).then(response => response.data.map((tarefa) => {
        idMetas.set(tarefa.nome, tarefa.id);
      })).finally(() =>  {
        axios.request({
          method: 'put',
          url: url.concat('/api/tarefas/'.concat(newId).concat('/metas/rel/').concat(idMetas.get(formData.metas.value))),
        }).then(response => console.log(response));
      });

      axios.request({
        method: 'get',
        url: url.concat('/api/papeis'),
      }).then(response => response.data.map((tarefa) => idPapeis.set(tarefa.nome, tarefa.id))).finally(() => {
        formData.papeis.map((papel) => {
          axios.request({
            method: 'put',
            url: url.concat('/api/tarefas/'.concat(newId).concat('/papeis/rel/'.concat(idPapeis.get(papel.value)))),
          }).then(response => console.log(response));
        });
      });
      }
    );

    alert(JSON.stringify(formData));
  };
  return React.cloneElement(component, {
    onSubmit: onSubmit,
    url: component.props.url,
  });
}

export default AddTarefaHoc;