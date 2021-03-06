import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated';

class SelectMany extends Component {
    render() {
        return (
            <Select options = {this.props.options}
                    components={makeAnimated()}
                    isMulti
                    onChange={this.props.handleChange}
                    value={this.props.value}/>
        );
    }
}

SelectMany.propTypes = {
    options: PropTypes.array,
    value:PropTypes.array
};

export default SelectMany;