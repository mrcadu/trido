import React, {Component} from 'react';
import PropTypes from 'proptypes';
import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated';

class SelectMany extends Component {
    render() {
        return (
            <Select options = {this.props.value}
                    components={makeAnimated()}
                    isMulti />
        );
    }
}

SelectMany.propTypes = {
    value: PropTypes.array
};

export default SelectMany;