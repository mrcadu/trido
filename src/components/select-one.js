import React,{Component} from 'react';
import PropTypes from 'proptypes';
import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated';

class SelectOne extends Component{
    render(){
        return(<Select  components={makeAnimated()}
                        options={this.props.options}
                        />);
    }
}

export default SelectOne