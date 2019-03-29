import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated';

class SelectOne extends Component{
    render(){
        return(<Select  components={makeAnimated()}
                        options={this.props.options}
                        value = {this.props.value}
                        style={{margin: '15px 10px 0px 10px'}}
                        onChange={this.props.handleChange}/>);
    }
}
SelectOne.propTypes = {
    options: PropTypes.array,
    value:PropTypes.oneOfType([PropTypes.array,PropTypes.object]),
    handleChange:PropTypes.func
};
export default SelectOne;