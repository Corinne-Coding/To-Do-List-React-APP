import { Link } from "react-router-dom";

const RedirectButton = ({ text, page, style }) => {
  return style === "bordered" ? (
    <Link to={page}>
      <div className="btn styled-btn blue-btn line-center redirect-bordered-btn">
        <i className="fas fa-arrow-left"></i> <span>boards</span>
      </div>
    </Link>
  ) : (
    <Link to={page}>
      <div className="btn redirect-lined-btn">
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default RedirectButton;
