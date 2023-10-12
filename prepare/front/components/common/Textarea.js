import React from 'react';
import {useController} from "react-hook-form";
import styled from "styled-components";
const Field = styled.div`
  
`

const Textarea = ({
  control,
  name = '',
  rules = {},
  label = '',
  placeholder = '',
  className = '',
  disabled = false,
  size = 'sm',
  resize = false,
  maxLength = false ?? 0,
  rows = 3,
  ...rest
} ) => {

  const {
    field,
    fieldState: { error, invalid }
  } = useController({
    control,
    name,
    rules
  })

  return (
    <Field className="textarea-form">
      {label && (
        <label className={`label ${focus ? 'focus' : ''}`} htmlFor={name}>
          {label}
        </label>
      )}
      <textarea
        id={name}
        className={`text-area ${resize ? '' : 'no-resize'}`}
        value={field.value}
        // autoComplete="off"
        maxLength={maxLength || 500}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        {...rest}
      />
    </Field>
  );
};

export default Textarea;