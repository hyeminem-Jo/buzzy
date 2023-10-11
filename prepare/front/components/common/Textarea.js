import React from 'react';
import {useController} from "react-hook-form";

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
  ...props
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
    <div>

    </div>
  );
};

export default Textarea;