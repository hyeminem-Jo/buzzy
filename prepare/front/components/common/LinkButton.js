import React from 'react';
import styled from "styled-components";
import Link from "next/link";

const btnColors = {
  primary: '#ffc451',
  secondary: '#ebebeb'
}

const LinkBtnWrap = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  //border: 1px solid red;
  
  a {
    //border: 1px solid gray;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 15px;
    font-weight: 600;
    
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
  }
`

const LinkButton = ({
    children,
    disabled,
    href,
    size = 'md',
    color = 'primary',
    onClick,
    ...restProps }) => {
  return (
    <LinkBtnWrap
      disabled={disabled}
      onClick={onClick}
      {...restProps}
    >
      <Link href={href} className={`${size} ${color}`}>
        {children}
      </Link>
    </LinkBtnWrap>
  );
};

export default LinkButton;