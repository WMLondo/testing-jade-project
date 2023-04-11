import React from "react";

import styled from "styled-components";

export const Button = styled.button`
  padding: 14px 28px;
  font-size: 16px;
  font-weight: 700;
  font-family: "PTSans", sans-serif;
  color: ${({ theme: { colors } }) => colors.neutralColorMax};
  background: ${({ theme: { gradients } }) =>
    gradients.primaryColorLinearGradient300To400Transform180};
  box-shadow: 0px 0px 10px rgba(16, 163, 90, 0.5);
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    background: ${({ theme: { colors } }) => colors.primaryColor300};
  }

  &:active {
    background: ${({ theme: { colors } }) => colors.primaryColor};
  }

  &:disabled,
  button[disabled] {
    background: ${({ theme: { colors } }) => colors.primaryColorDisabled};
    cursor: initial;
  }
`;

export const DangerButton = styled(Button).attrs({ type: "danger" })`
  background: ${({ theme: { gradients } }) =>
    gradients.dangerColorLinearGradient500To400Transform180};
  box-shadow: none;

  &:hover {
    background: ${({ theme: { colors } }) => colors.dangerColor500};
  }
  &:active {
    background: ${({ theme: { colors } }) => colors.dangerColor600};
  }
  &:disabled,
  button[disabled] {
    background: ${({ theme: { colors } }) => colors.dangerColorDisabled};
  }
`;
