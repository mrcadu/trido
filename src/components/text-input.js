import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({name, value, handleChange, placeholder, style, onBlur, onKeyDown,autoFocus}) => {
    return (<input name={name}
                   type="text"
                   autoFocus={autoFocus}
                   placeholder={placeholder}
                   value={value}
                   onBlur={onBlur}
                   onChange={handleChange}
                   onKeyDown={onKeyDown}
                   style={style}
                   className="text-input"/>
    );
};

TextInput.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    style: PropTypes.object,
};

export default TextInput;