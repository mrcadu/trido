import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated';

class SelectMany extends Component {
    handleChange = selectedOption => {
        this.setState({ selectedOption:selectedOption[0].value  });
        console.log(`Option selected:`, selectedOption);
    };
    render() {
        return (
            <Select options = {this.props.options}
                    components={makeAnimated()}
                    isMulti
                    onChange={this.handleChange}
                    value={this.props.value}/>
        );
    }
}

SelectMany.propTypes = {
    options: PropTypes.array,
    value:PropTypes.array
};

export default SelectMany;