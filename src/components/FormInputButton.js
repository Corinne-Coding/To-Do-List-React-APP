import React from "react";

const FormInputButton = ({ value, disabled }) => {
  return (
    <input
      type="submit"
      value={value}
      className="btn form-input-button"
      disabled={disabled}
    />
  );
};

export default FormInputButton;
