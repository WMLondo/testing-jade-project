import React from "react";

import styled from "styled-components";

export const Button = styled.button`
  padding: 14px 28px;
  font-size: 16px;
  font-weight: 700;
  font-family: "PTSans", sans-serif;
  color: var(--primary-color);
  background: linear-gradient(
    180deg,
    var(--tertiary-color-hds) 0%,
    var(--tertiary-color) 100%
  );
  box-shadow: 0px 0px 10px rgba(16, 163, 90, 0.5);
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    background: var(--tertiary-color-hds);
  }

  &:active {
    background: var(--tertiary-color);
  }

  &:disabled,
  button[disabled] {
    background: var(--tertiary-color-disable);
    cursor: initial;
  }
`;

export const DangerButton = styled(Button).attrs({ type: "danger" })`
  background: linear-gradient(
    180deg,
    var(--danger-color-bds) 0%,
    var(--danger-color) 100%
  );
  box-shadow: none;

  &:hover {
    background: var(--danger-color-hs);
  }
  &:active {
    background: var(--danger-color-bds);
  }
  &:disabled,
  button[disabled] {
    background: var(--danger-color-s70-b74);
  }
`;
