import { useHistory } from "react-router-dom";

const DisconnectionButton = ({ handleTokenAndName }) => {
  const history = useHistory();
  return (
    <div
      onClick={() => {
        const bool = handleTokenAndName();
        if (bool) {
          history.push("/");
        }
      }}
      className="btn styled-btn red-btn disconnect-btn"
    >
      Disconnection
    </div>
  );
};

export default DisconnectionButton;
