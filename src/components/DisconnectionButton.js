const DisconnectionButton = ({ handleToken }) => {
  return (
    <div
      onClick={() => {
        handleToken();
      }}
      className="btn styled-btn red-btn disconnect-btn"
    >
      Disconnection
    </div>
  );
};

export default DisconnectionButton;
