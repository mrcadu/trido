import React,{Component} from 'react';
import PropTypes from 'proptypes';
import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated';

class SelectOne extends Component{
    render(){
        return(<Select  components={makeAnimated()}
                        options={this.props.options}
                        style={{margin: '15px 10px 0px 10px'}}
                        value = {this.props.value}/>);
    }
}
SelectOne.propTypes = {
    options: PropTypes.array,
    value:PropTypes.string
};
export default SelectOne;