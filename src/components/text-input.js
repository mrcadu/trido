import React, {Component} from 'react';
import PropTypes from 'proptypes';

class TextInput extends Component {
    render() {
        return <input name={this.props.name}
                      type="text"
                      autoFocus={true}
                      placeholder={this.props.placeholder}
                      value={this.props.value}
                      onBlur={this.props.onBlur}
                      onChange={this.props.handleChange}
                      onKeyDown={this.props.onKeyDown}
                      style={this.props.style}
                      className="text-input"/>;
    }
}
TextInput.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    handleChange : PropTypes.func,
    placeholder: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
};

export default TextInput;