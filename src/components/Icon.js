const Icon = ({
  setHover,
  iconName,
  icon1,
  icon2,
  hover,
  onClickFunction,
  isLoadingTask,
}) => {
  return (
    <img
      onMouseEnter={() => {
        !isLoadingTask && setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onClick={onClickFunction}
      src={!hover ? icon1 : icon2}
      alt={iconName}
    />
  );
};

export default Icon;
