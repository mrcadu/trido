import React from 'react';
import PropTypes from 'proptypes';

const Button  = ({onClick,label,type,className,style}) => {
    {
        return (
            <button type={type} className={className} onClick={onClick} style={style}>
                {label}
            </button>
        );
    }
};
Button.propTypes = {
    onClick : PropTypes.func,
    label : PropTypes.string,
    type : PropTypes.string,
    className : PropTypes.string,
    style: PropTypes.object
};

export default Button;