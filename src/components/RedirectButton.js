import { Link } from "react-router-dom";

const RedirectButton = ({ text, page }) => {
  return (
    <Link to={page}>
      <div className="btn redirect-button">
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default RedirectButton;
