import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 14px 28px;
  font-size: 16px;
  font-weight: 700;
  font-family: "PTSans", sans-serif;
  color: var(--primary-color);
  background: ${props => props.danger ? "linear-gradient(180deg, var(--danger-color-hs) 0%, var(--danger-color) 100%);" : "linear-gradient(180deg, var(--tertiary-color-hs) 0%, var(--tertiary-color) 100%);"};
  box-shadow: 0px 0px 10px ${props=> props.danger ? "" : "rgba(16, 163, 90, 0.5); "} ;
  border-radius: 5px;
  border: none;

  &:hover{
    background: ${props => props.danger ? "var(--danger-color-hs);" : "var(--tertiary-color-hds);"};
  }

  &:active{
    background:${props => props.danger ? "var(--danger-color-bds);" : "var(--tertiary-color);"};
  }

  &:disabled,button[disabled]{
    background:${props => props.danger ? "var(--danger-color-s70-b74)" : "var(--tertiary-color-disable);"};
  }

`;

export default Button;
