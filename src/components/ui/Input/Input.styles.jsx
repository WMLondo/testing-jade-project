import React from "react";
import styled from "styled-components";

const handleValidationState = (isValid) => {
  switch (isValid) {
    case true:
      return `
      border: 1px solid var(--tertiary-color);
      box-shadow: inset 0px 0px 10px rgba(16, 162, 106, 0.25);
      `;
    case false:
        return `border: 1px solid var(--danger-color);
        box-shadow: inset 0px 0px 10px rgba(162, 16, 16, 0.25);
        color: var(--danger-color)`;
    default:
        return  `border: 1px solid var(--secondary-color-bm);
        box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.25);`;
  }
    
};

export const Input = styled.input`
  width: ${(props) => props.width || "261px"};
  height: ${(props) => props.height || "43px"};
  font-size: 1rem;
  color: var(--secondary-color);
  background: var(--primary-color);
  padding: 0px 8px;
  font-weight: 400;
  ${props => handleValidationState(props.isValid)}
  border-radius: 5px;

  &:hover:enabled {
    border: 1px solid var(--tertiary-color-hs);
    box-shadow: inset 0px 0px 10px rgba(16, 162, 82, 0.25);
  }
  &:focus {
    outline: none;
    border: 1px solid var(--tertiary-color-hds);
    box-shadow: inset 0px 0px 10px rgba(16, 162, 106, 0.25);
  }
  &:disabled,
  input[disabled] {
    background-color: #f1f1f1;
    &hover {
      border: 1px solid var(--secondary-color-bm);
      box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.25);
    }
  }
`;
