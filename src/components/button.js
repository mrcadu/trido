import React from 'react';
import PropTypes from 'proptypes';

const Button  = ({onClick,name}) => {
    {
        return (
            <button onClick={onClick}>
                {name}
            </button>
        );
    }
};
Button.propTypes = {
    onClick : PropTypes.func,
    name : PropTypes.string
};

export default Button;