import React,{Component} from 'react'
import PropTypes from 'proptypes'

class Button extends Component{
    render(){
        return (
            <button onClick={this.props.onClick}>
                {this.props.name}
            </button>
        )
    }
}
Button.propTypes = {
    onClick : PropTypes.func,
    name : PropTypes.string
};

export default Button