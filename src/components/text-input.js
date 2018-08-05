import React, {Component} from 'react';
import PropTypes from 'proptypes';

class TextInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            text: ''
        };
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        });

    }

    render() {
        return <input name={this.props.name}
                      autoFocus="true"
                      type="text"
                      align="center"
                      placeholder={this.props.placeholder}
                      value={this.state.text}
                      onBlur={this.props.onBlur}
                      onChange={this.handleChange}
                      onKeyDown={this.props.onKeyDown}
                      style={this.props.style}
                      className="text-input"/>;
    }
}

TextInput.propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
    onBlur: PropTypes.func,
    onKeyDown: PropTypes.func,
    placeholder: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string
};

export default TextInput;