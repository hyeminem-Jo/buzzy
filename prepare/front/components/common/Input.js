import React, {useEffect, useState} from 'react';
import { useController } from "react-hook-form";
import styled from "styled-components";

const Field = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  
  &.checkbox {
    flex-direction: row;
    align-items: center;
    .error {
      display: inline-block;
      margin-top: 0;
      margin-left: 5px;
    }
    label {
      margin-left: 2px;
    }
  }
  
  &:first-of-type {
    margin-top: 0;
  }
  
  label {
    &:not([for="term"]) {
      display: block;
      margin-bottom: 10px;
      font-weight: 600;
      font-size: 18px;
    }
    
    &[for="term"] {
      order: 2;
    }
  }

  input {
    &[type="checkbox"] {
      order: 1;
    }
    
    &:not([type="checkbox"]) {
      width: 90%;
    }
  }
  
  .error {
    display: block;
    margin-top: 5px;
    order: 3;
    color: crimson;
    
    em {
      margin-right: 3px;
    }
  }
`

const Input = ({
   control,
   name,
   rules,
   required = false,
   type = 'text',
   label = '',
   maxLength = false ?? 0,
   placeholder = '',
   onChange = () => {},
   disabled,
   ...rest
    }) => {

  const {
    field,
    fieldState: { error }
  } = useController({
    name,
    control,
    rules,
  })

  return (
    <Field className={`${type === 'checkbox' ? 'checkbox' : ''} input-form`}>
      {label && (
        <label htmlFor={name}>
          {label}
        </label>
      )}
      <input
        id={name}
        type={type}
        className='input'
        value={field.value || ''}
        onChange={field.onChange}
        placeholder={placeholder}
        disabled={disabled}
        {...rest}
      />
      {error && <span className="error"><em>*</em>{error.message}</span>}
    </Field>
  );
};

export default Input;