import React from "react";

const FormInput = ({ placeholder, type, value, setFunction }) => {
  const handleInputChange = (value) => {
    setFunction(value);
  };

  return (
    <input
      placeholder={placeholder}
      type={type}
      className="form-input"
      value={value}
      onChange={(event) => {
        handleInputChange(event.target.value);
      }}
    />
  );
};

export default FormInput;
