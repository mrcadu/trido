import React,{Component} from 'react'
import PropTypes from "prop-types";
import TarefaForm from "../components/tarefa-form";
class TarefaFormWithData extends Component {
    constructor(props){
        super(props);
        this.selectJsonConverter = this.selectJsonConverter.bind(this);
        this.state = {
            metas:[],
            papeis:[]
        }
    }
    selectJsonConverter(jsonList) {
        const selectOptions = [];
        jsonList.map(element => {
            let currentOption = {
                value:element.nome ,
                label:element.nome
            };
            selectOptions.push(currentOption)
        });
        return selectOptions;
    }
    componentDidMount(){
        const url = this.props.url;
        fetch(url.concat("/api/metas"))
            .then(response => response.json())
            .then(response => this.setState({ metas : this.selectJsonConverter(response) }));
        fetch(url.concat("/api/papeis"))
            .then(response => response.json())
            .then(response => this.setState({ papeis : this.selectJsonConverter(response) } ));
    }
    render(){
        return <TarefaForm onSubmit={this.props.onSubmit} papeis={this.state.papeis} metas={this.state.metas}/>
    }
}
TarefaFormWithData.defaultProps = {
    url:'http://localhost:3001'
};
TarefaFormWithData.propTypes = {
    url:PropTypes.string.isRequired,
    onSubmit:PropTypes.func
};
export default TarefaFormWithData;