import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 14px 28px;
  font-size: 16px;
  font-weight: 700;
  font-family: "PTSans", sans-serif;
  color: var(--primary-color);
  background: linear-gradient(180deg, var(--tertiary-color-hs) 0%, var(--tertiary-color) 100%);
  box-shadow: 0px 0px 10px rgba(16, 163, 90, 0.5); 
  border-radius: 5px;
  border: none;

  &:hover{
    background:var(--tertiary-color-hds);
  }

  &:active{
    background:var(--tertiary-color);
  }

  &:disabled,button[disabled]{
    background:var(--tertiary-color-disable);
  }

`;

export default Button;
