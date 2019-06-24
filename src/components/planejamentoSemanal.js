import React,{Component} from 'react';
import WithTarefas from "../HOC/withTarefas";
import Button from "./button";
import WithMultiplasTarefasSave from "../HOC/withMultiplasTarefasSave";

class PlanejamentoSemanal extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tarefaDiasDaSemana:[[],[],[],[],[],[],[]]
        };
    }
    componentDidUpdate(prevProps, prevState,snapshot) {
        if(prevState !== this.state){
            return
        }
        if (this.props.tarefas !== prevProps) {
            const tarefas = this.props.tarefas;
            if(tarefas.length > 0 ) {
                const tarefaDiasDaSemana = [[],[],[],[],[],[],[]];
                const dataAtual = new Date();
                const primeiroDiaDaSemana = dataAtual.getDate() - dataAtual.getDay();
                for(let i = 0; i<tarefas.length;i++){
                    let tarefa = tarefas[i];
                    const diaDoMesTarefaAtual = new Date(tarefa.data).getDate();
                    if(diaDoMesTarefaAtual >= primeiroDiaDaSemana && diaDoMesTarefaAtual <= primeiroDiaDaSemana + 6){
                        const diaDaSemanaAtual = new Date(tarefa.data).getDay();
                        tarefaDiasDaSemana[diaDaSemanaAtual].push(tarefa);
                    }
                }
                this.setState({
                    tarefaDiasDaSemana:tarefaDiasDaSemana
                })
            }
        }
    }

    static onDragOver(e){
        e.preventDefault();
    }
    static onDragStart(e, id,index){
        e.dataTransfer.setData("text/plain",id +'-'+index);
    }
    onDrop(e,dia){
        const informacoesTarefaArrastada = e.dataTransfer.getData("text/plain").split('-');
        const id = informacoesTarefaArrastada[0];
        const index = informacoesTarefaArrastada[1];
        let indexTarefaOrigem=0;
        const novoEstado = this.state.tarefaDiasDaSemana;
        novoEstado[index].forEach((tarefaAtual,index)=>{
            if(tarefaAtual.id === id){
                indexTarefaOrigem = index;
            }
        });
        const dataAtual = new Date();
        const primeiroDiaDaSemana = dataAtual.getDate() - dataAtual.getDay();
        const novaTarefa = novoEstado[index][indexTarefaOrigem];
        const novoDiaDaTarefa = primeiroDiaDaSemana + dia;
        const dataTarefa = new Date(novaTarefa.data);
        dataTarefa.setDate(novoDiaDaTarefa);
        novaTarefa.data = dataTarefa;
        novoEstado[dia].push(novaTarefa);
        novoEstado[index].splice(indexTarefaOrigem,1);
        this.setState({
            tarefaDiasDaSemana:novoEstado
        })
    }
    render() {
        const diasDaSemana = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
        const styles = {
            divisaoExternas:{
                display:'flex',
                justifyContent:'space-around',
                textAlign:'center'
            },
            divisaoDias:{
                display:'flex'
            },
            tarefasDia:{
                width:'14%',
            },
            tarefa:{
                textAlign: 'left',
                cursor:'pointer'
            }
        };
        return (
            <div>
                <div style={styles.divisaoExternas}>
                    {
                        diasDaSemana.map((dia,index)=>{
                        return (<div onDragOver={(e)=>{PlanejamentoSemanal.onDragOver(e)}}
                                     key={dia}
                                     style={styles.tarefasDia}
                                     onDrop={(e)=>{this.onDrop(e,index)}}>
                            <p> {dia }</p>
                            {this.state.tarefaDiasDaSemana[index].map((tarefaDiaAtual)=>{
                                return(<p draggable
                                          onDragStart={(e)=>{PlanejamentoSemanal.onDragStart(e,tarefaDiaAtual.id,index)}}
                                          style={styles.tarefa}
                                          key={tarefaDiaAtual.id}> {tarefaDiaAtual.nome} </p>)
                            })}
                        </div>)
                    })}
                </div>
                <Button onClick={() => this.props.onClick(this.state.tarefaDiasDaSemana)}
                        label="Salvar"
                        className="button-save"
                        style={{float: 'right'}}/>
            </div>
        );
    }

}
const withTarefas = WithTarefas(PlanejamentoSemanal);
export default WithMultiplasTarefasSave(withTarefas);