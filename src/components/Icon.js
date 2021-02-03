const Icon = ({ setHover, iconName, icon1, icon2, hover, onClickFunction }) => {
  return (
    <img
      onMouseEnter={() => {
        setHover(true);
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
