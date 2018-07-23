import React, {Component} from 'react'
import PropTypes from 'proptypes'

class TextInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            text: ''
        };
    }
    handleChange(e){
        this.setState({
            text: e.target.value
        });
    };
    render() {
        return (<div align="center">
            <p>{this.props.name}</p>
            <input name={this.props.name}
                   autoFocus="true"
                   type="text"
                   value={this.state.text}
                   onChange={this.handleChange}/>
        </div>)
    }
}

TextInput.propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
};

export default TextInput;