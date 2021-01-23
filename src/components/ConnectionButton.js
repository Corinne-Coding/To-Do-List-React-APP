import { Link } from "react-router-dom";

const ConnectionButton = ({ text, page }) => {
  return (
    <Link to={page}>
      <div className="btn styled-btn blue-btn connection-button">
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default ConnectionButton;
