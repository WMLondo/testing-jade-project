import React, { useEffect } from "react";
import { useState } from "react";

import {
  ComboBoxContainer,
  ComboBoxSelect,
  ComboBoxSelectedOption,
  ComboBoxOptionsContainer,
  ComboBoxButton,
  ComboBoxOption,
} from "./ComboBox.styles";

const ComboBox = ({ width, height, optionsHeight, options }) => {
  const [defaultValue, setDefaultValue] = useState({});
  const [value, setValue] = useState();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    options.map((option) => {
      return option.isDefault && setDefaultValue(option);
    });
  }, []);

  const handleSelectedOptionValue = (option) => {
    if (option.label.length <= 23) {
      setValue(option);
      return setIsOpen(false);
    }
    const newShortLabel = `${option.label.substring(0, 23)}...`;
    setValue({ value: option.value, label: newShortLabel });
    setIsOpen(false);
  };

  const handleStringLength = (str) => {
    if (str <= 23) {
      return str;
    }

    const sliceString = `${str.substring(0, 23)}...`;

    return sliceString;
  };

  return (
    <ComboBoxContainer>
      <ComboBoxSelect width={width} height={height}>
        <ComboBoxSelectedOption>
          {value ? value.label : defaultValue.label}
        </ComboBoxSelectedOption>
        <ComboBoxButton
          onClick={() =>
            setIsOpen(() => {
              return !isOpen;
            })
          }
        >
          <box-icon name="chevron-down" rotate={isOpen && "180"}></box-icon>
        </ComboBoxButton>
      </ComboBoxSelect>
      <ComboBoxOptionsContainer
        opened={isOpen}
        width={width}
        height={optionsHeight}
        selectedHeight={height}
      >
        {options &&
          isOpen &&
          options.map((option) => {
            return (
              <ComboBoxOption
                onClick={() => handleSelectedOptionValue(option)}
                label={option.label}
                key={option.value}
              >
                {option.label}
              </ComboBoxOption>
            );
          })}
      </ComboBoxOptionsContainer>
    </ComboBoxContainer>
  );
};

export default ComboBox;
