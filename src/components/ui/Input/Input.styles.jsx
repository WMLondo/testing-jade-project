import React from "react";
import styled from "styled-components";

const handleValidationState = (isValid) => {
  switch (isValid) {
    case true:
      return `
      border: 1px solid ${({ theme: { colors } }) => colors.primaryColor};;
      box-shadow: inset 0px 0px 10px rgba(16, 162, 106, 0.25);
      `;
    case false:
      return `border: 1px solid var(--danger-color);
        box-shadow: inset 0px 0px 10px rgba(162, 16, 16, 0.25);
        color: var(--danger-color)`;
    default:
      return `border: 1px solid ${({ theme: { colors } }) =>
        colors.neutralColorMin300}
        box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.25);`;
  }
};

export const Field = styled.input`
  width: ${(props) => props.width || "261px"};
  height: ${(props) => props.height || "43px"};
  font-size: ${({ theme: { fontSize } }) => fontSize.m};
  color: ${({ theme: { colors } }) => colors.neutralColorMin100};
  background: ${({ theme: { colors } }) => colors.neutralColorMax};
  padding: 0px 8px;
  font-weight: 400;
  ${(props) => handleValidationState(props.isValid)}
  border-radius: 5px;
  border: 1px solid ${({ theme: { colors } }) => colors.neutralColorMin400};
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.25);

  &:hover:enabled {
    border: 1px solid ${({ theme: { colors } }) => colors.primaryColor500};
    box-shadow: inset 0px 0px 10px rgba(16, 162, 82, 0.25);
  }
  &:focus {
    outline: none;
    border: 1px solid ${({ theme: { colors } }) => colors.primaryColor300};
    box-shadow: inset 0px 0px 10px rgba(16, 162, 106, 0.25);
  }
  &:disabled,
  input[disabled] {
    background-color: ${({ theme: { colors } }) => colors.neutralColorMax50};
    &hover {
      border: 1px solid ${({ theme: { colors } }) => colors.neutralColorMin300};
      box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.25);
    }
  }
`;

export const RadioContainer = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-family: "PT Sans", sans-serif;
  font-size: ${({ theme: { fontSize } }) => fontSize.m};
  line-height: 24px;
`;

export const RadioInput = styled.input.attrs({ type: "radio" })`
  position: absolute;
  opacity: 0;
  z-index: -1;
`;

export const RadioCheckmark = styled.span`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  border: 0.5px solid ${({ theme: { colors } }) => colors.neutralColorMin400};
  border-radius: 50%;
  background: ${({ theme: { colors } }) => colors.neutralColorMax};
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
    background: ${({ theme: { gradients } }) =>
      gradients.primaryColorRadialGradient500To400};
    opacity: 0;
  }

  ${RadioInput}:checked + &:before {
    opacity: 1;
  }
`;

export const CheckboxContainer = styled.label`
  display: inline-flex;
  align-items: center;
  margin-bottom: 16px;
  cursor: pointer;
`;

export const CheckboxInput = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const CheckboxCheckmark = styled.span`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  border: 0.5px solid #787878;
  background: #ffffff;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    border-radius: 2px;
    background: ${({ theme: { gradients } }) =>
      gradients.primaryColorRadialGradient500To400};
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }
  ${CheckboxInput}:checked + &:after {
    opacity: 1;
  }
`;

export const CheckboxLabel = styled.span`
  font-family: "PT Sans";
  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme: { fontSize } }) => fontSize.m};
  line-height: 24px;
`;
