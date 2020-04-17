import React from 'react';

const Input = ({ type, func, value, placeholder, required }) => {
    return (
        <input 
            type={type} 
            onChange={func} 
            value={value} 
            className="form-control mb-3"
            placeholder={placeholder}
            required={!!required}
        />
    )
}

export default Input;
