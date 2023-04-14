import {
  Field,
  RadioContainer,
  RadioInput,
  RadioCheckmark,
  CheckboxContainer,
  CheckboxInput,
  CheckboxLabel,
  CheckboxCheckmark,

} from "./Input.styles";

export default Field;

export const RadioButton = (props) => {
  return (
    <RadioContainer>
      <RadioInput {...props} />
      <RadioCheckmark />
      {props.label}
    </RadioContainer>
  );
};

export const Checkbox = (props) => (
  <CheckboxContainer>
    <CheckboxInput {...props} />
    <CheckboxCheckmark />
    <CheckboxLabel>{props.label}</CheckboxLabel>
  </CheckboxContainer>
);

