import { Link } from "react-router-dom";

const RedirectButton = ({ text, page, style, icon }) => {
  return style === "bordered" ? (
    <Link to={page}>
      <div className="btn styled-btn blue-btn line-center redirect-bordered-btn">
        <i className="fas fa-arrow-left"></i> <span>boards</span>
      </div>
    </Link>
  ) : style === "icon" ? (
    <Link to={page}>
      <div className="btn line-center">
        <img src={icon} className="icon" alt="icon" />
        <h1>To-do List</h1>
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
