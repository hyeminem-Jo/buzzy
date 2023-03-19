import React from 'react';

const Input = ({ name, label, type, ...rest, ...register }) => {
    return (
        <div>
            <label htmlFor={name}>
                {label}
            </label>
            <input {...register} id={name} type={type} {...rest} />
        </div>
    );
};

export default Input;