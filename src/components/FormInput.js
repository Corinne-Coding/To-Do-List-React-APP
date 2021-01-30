const FormInput = ({ placeholder, type, value, setFunction }) => {
  const handleInputChange = (valueFromInput) => {
    setFunction(valueFromInput);
  };

  return (
    <input
      placeholder={placeholder}
      type={type}
      maxLength={50}
      className="form-input"
      value={value}
      onChange={(event) => {
        handleInputChange(event.target.value);
      }}
    />
  );
};

export default FormInput;
