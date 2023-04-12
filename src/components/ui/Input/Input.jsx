import {
  Field,
  RadioContainer,
  RadioInput,
  RadioCheckmark,
  CheckboxContainer,
  CheckboxInput,
  CheckboxLabel,
  CheckboxCheckmark,
  ComboBoxContainer,
  ComboBoxSelect,
  ComboBoxSelectedOption,
  ComboBoxOptionsContainer,
  ComboBoxButton,
  ComboBoxOption,
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

export const ComboBox = (props) => (
  <ComboBoxContainer>
    <ComboBoxSelect width={props.width} height={props.height}>
      <ComboBoxSelectedOption>
        {props.value || props.defaultValue}
      </ComboBoxSelectedOption>
      <ComboBoxButton onClick={props.click}>
        <box-icon name="chevron-down" rotate={props.open && "180"}></box-icon>
      </ComboBoxButton>
    </ComboBoxSelect>
    <ComboBoxOptionsContainer
      opened={props.open}
      width={props.width}
      height={props.optionsHeight}
      selectedHeight={props.height}
    >
      {props.options &&
        props.options.map((option, index) => {
          return <ComboBoxOption key={index}>{option.value}</ComboBoxOption>;
        })}
    </ComboBoxOptionsContainer>
  </ComboBoxContainer>
);
