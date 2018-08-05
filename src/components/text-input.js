import React, {Component} from 'react';
import PropTypes from 'proptypes';

class TextInput extends Component {
    render() {
        return <input name={this.props.name}
                      autoFocus="true"
                      type="text"
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
    text: PropTypes.string,
    value: PropTypes.string,
    onBlur: PropTypes.func,
    onKeyDown: PropTypes.func,
    placeholder: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
};

export default TextInput;