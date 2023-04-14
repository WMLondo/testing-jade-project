import styled from "styled-components";

const handleValidationState = (isValid) => {
  switch (isValid) {
    case true:
      return `
      border: 1px solid #10a252;
      box-shadow: inset 0px 0px 10px rgba(16, 162, 106, 0.25);
      `;
    case false:
      return `border: 1px solid var(--danger-color);
        box-shadow: inset 0px 0px 10px rgba(162, 16, 16, 0.25);
        color: var(--danger-color)`;
    default:
      return `
        box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.25);`;
  }
};

export const ComboBoxContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: relative;
`;

export const ComboBoxSelect = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
  width: ${(props) => props.width || "261px"};
  height: ${(props) => props.height || "43px"};
  font-size: 16px;
  color: #2c2c2c;
  background: #ffffff;
  padding: 0px 8px;
  font-weight: 400;
  ${(props) => handleValidationState(props.isValid)}
  border-radius: 5px;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.25);
  border: 1px solid #5e5e5e;

  &:hover {
    border: 1px solid #10a23a;
    box-shadow: inset 0px 0px 10px rgba(16, 162, 82, 0.25);
  }
  &:focus {
    outline: none;
    border: 1px solid #10a26a;
    box-shadow: inset 0px 0px 10px rgba(16, 162, 106, 0.25);
  }
  &:disabled,
  input[disabled] {
    background-color: #f1f1f1;
    &hover {
      border: 1px solid #5e5e5e;
      box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.25);
    }
  }
`;

export const ComboBoxSelectedOption = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #2c2c2c; ;
`;

export const ComboBoxButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  width: auto;
  height: auto;
  padding-right: 8px;
  border: none;
  cursor: pointer;
  border-left: 1px solid #787878;

  &:first-child {
    width: 24px;
    height: 24px;
  }
`;

export const ComboBoxOptionsContainer = styled.ul`
  max-height: ${(props) => props.height || "172px"};
  width: 100%;
  display: flex;
  position: absolute;
  border: none;
  ${(props) =>
    props.selectedHeight
      ? `top: calc(${props.selectedHeight} + 8px)`
      : `top:calc(43px + 8px)`};
  flex-direction: column;
  justify-content: stretch;
  padding: 0;
  display: ${({ opened }) => (opened ? "flex" : "none")};
  background-color: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  z-index: 1;
  overflow-y: show;
  overflow-x: hidden;
  &:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  &:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #5e5e5e;
    border-radius: 30px;
    &:active {
      background-color: #454545;
    }
  }
  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    background-clip: padding-box;
  }
`;

export const ComboBoxOption = styled.li`
  display: flex;
  padding: 8px;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  width: ${(props) => props.width || "100%"};
  min-height: ${(props) => props.height || "43px"};
  cursor: pointer;
  font-size: 16px;
  color: #2c2c2c;
  background: #ffffff;
  padding: 0px 8px;
  font-weight: 400;
  ${(props) => handleValidationState(props.isValid)}
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  &:hover {
    background-color: #f1f1f1;
  }
`;
