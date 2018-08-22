import React,{Component} from 'react'
import axios from 'axios'

const WihTarefas = (WrappedComponent ) => {
  const url = process.env.REACT_APP_FETCH_URL;

  class ListaTarefas extends Component {
    constructor(props){
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.state = {
        tarefas:{
          data:[]
        }
      };
    }
    handleClick(e,tarefa){
      tarefa.statusId = 'c428e5bfa421';
      axios.request({
        method: 'post',
        url: url.concat('/api/tarefas/update?where[id]=').concat(tarefa.id),
        data:{ statusId: 'c428e5bfa421'}
      }).then(response => console.log(response));
      this.setState(prevState => {
        const newState = prevState.tarefas.data.filter(function(task) {
          return task !== tarefa
        });
        return {
          tarefas:{data:newState},
        }
      })
    };
    componentDidMount(){
        axios.request({
        method: 'get',
        url: url.concat('/api/statusTarefas/9b270ae6a421/tarefas'),
      }).then(response => this.setState({tarefas : response} ));
    }
    render(){
      return < WrappedComponent tarefas={this.state.tarefas.data} handleClick={this.handleClick} {...this.props}/>
    }
  }
  return ListaTarefas;
};
export default WihTarefas;