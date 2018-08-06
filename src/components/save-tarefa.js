import React,{Component} from 'react'
import AddTarefa from './add-tarefa'

class SaveTarefa extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = values => {
          console.log(values)
    };
    render(){
        return(
            <AddTarefa />
        )
    }
}

export default SaveTarefa;