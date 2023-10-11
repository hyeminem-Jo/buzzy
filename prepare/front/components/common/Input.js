import React, {useEffect, useState} from 'react';
import { useController } from "react-hook-form";
import styled from "styled-components";

const Field = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => props.isCheckbox ? 'row' : 'column'};
  margin-top: 30px;
  
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
    width: 100%;
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

  const [isCheckbox, setIsCheckbox] = useState(false);
  useEffect(() => {
    if (type === 'checkbox') {
      setIsCheckbox(true)
    }
  }, [type])

  return (
    <Field isCheckbox={isCheckbox}>
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
        {...rest}
      />
      {error && <span className="error"><em>*</em>{error.message}</span>}
    </Field>
  );
};

export default Input;