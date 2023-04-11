import {
  Input,
  RadioContainer,
  RadioInput,
  RadioCheckmark,
} from "./Input.styles";

export default Input;

export const RadioButton = ({ value, name, checked, onChange, label }) => {
  return (
    <RadioContainer>
      <RadioInput
        value={value}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <RadioCheckmark />
      {label}
    </RadioContainer>
  );
};
export {};
