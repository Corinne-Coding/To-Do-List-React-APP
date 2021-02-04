const FormInputButton = ({ value, isDisabled }) => {
  return (
    <input
      type="submit"
      value={value}
      className={
        isDisabled ? "btn form-input-button-disabled" : "btn form-input-button"
      }
      disabled={isDisabled}
    />
  );
};

export default FormInputButton;
