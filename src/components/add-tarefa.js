import React ,{Component} from 'react';
import PropTypes from 'proptypes';
import TextInput from "./text-input";
import SelectOne from "./select-one";

class AddTarefa extends Component{
    render(){
        return(
            <div align="center">
                <TextInput placeholder={"nome da tarefa"}/>
                <SelectOne >

            </div>
        );
    }
}


AddTarefa.propTypes = {
};
export default AddTarefa;