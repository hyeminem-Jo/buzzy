import React from 'react';
import styled from "styled-components";

const btnColors = {
  primary: '#ffc451',
  secondary: '#ebebeb'
}

const ButtonWrap = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 0 15px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  color: #FFF;
  
  &[class*='primary'] {
    //color: #151515;
    color: #664d03;
    background-color: ${btnColors.primary};
  }
  &[class*='secondary'] {
    color: #664d03;
    background-color: ${btnColors.secondary};
  }

  &:hover {
    opacity: 0.8;
  }
  
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
    
    &[class*='primary'] {
      //background-color: #c5defb;
    }
    &[class*='secondary'] {
      //background-color: #ddd;
    }
    &[class*='danger'] {
      //opacity: 0;
    }
  }

  &[class*='sm'] {
    height: 32px;
    font-size: 12px;
  }
  &[class*='md'] {
    height: 38px;
    font-size: 14px;
  }
`

const Button = ({
    children,
    disabled,
    type = 'button',
    size = 'md',
    color = 'primary',
    onClick,
    ...restProps }) => {
  return (
    <ButtonWrap
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${size} ${color}`}
      {...restProps}
    >
      {children}
    </ButtonWrap>
  );
};

export default Button;