const EmptyLine = ({ text, centered }) => {
  return (
    <p className={centered ? "empty-line line-center" : "empty-line"}>{text}</p>
  );
};

export default EmptyLine;
