// LanguageDropdown.js

import React from "react";
import Select from "react-select";
import { customStyles } from "../editor/constants/customStyles";
import { languageOptions } from "../editor/constants/languageOptions";

const LanguagesDropdown = ({ onSelectChange }) => {
  return (
    <Select
      placeholder={`Filter By Category`}
      options={languageOptions}
      styles={customStyles}
      defaultValue={languageOptions[0]}
      onChange={(selectedOption) => onSelectChange(selectedOption)}
    />
  );
};

export default LanguagesDropdown;