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
      return `border: 1px solid var(--secondary-color-bm);
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
  ${(props) => handleValidationState(props.isValid)}
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

export const RadioContainer = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-family: "PT Sans", sans-serif;
  font-size: 16px;
  line-height: 24px;
`;

export const RadioInput = styled.input.attrs({ type: "radio" })`
  position: absolute;
  opacity: 0;
  z-index: -1;

  &:checked{
    box-shadow: 0px 0px 8px rgba(16, 162, 82, 0.8);
  }
`;

export const RadioCheckmark = styled.span`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  border: 0.5px solid #6e6e6e;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: radial-gradient(50% 50% at 50% 50%, #10a23a 0%, #10a252 100%);
    opacity: 0;
  }

  ${RadioInput}:checked + &:before {
    opacity: 1;
  }
`;
