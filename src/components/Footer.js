// Components
import AnimatedIcon from "../components/AnimatedIcon";

const Footer = () => {
  return (
    <footer className="column-center">
      <div className="line-center">
        <p>Made by Corinne - 2020</p>
        <AnimatedIcon name="github" link="https://github.com/Corinne-Coding" />
        <AnimatedIcon
          name="linkedin"
          link="https://www.linkedin.com/in/corinne-pradier-6610201b2/"
        />
      </div>
      <div>
        <p>
          <span>To-do list icon & sort icon made by&nbsp;</span>
          <a
            href="https://www.flaticon.com/fr/auteurs/darius-dan"
            target="_blank"
            rel="noreferrer"
          >
            Darius Dan&nbsp;
          </a>
          <span>and&nbsp;</span>
          <a
            href="https://www.flaticon.com/authors/vectors-market"
            target="_blank"
            rel="noreferrer"
          >
            Vectors Market&nbsp;
          </a>
          <span>from&nbsp;</span>
          <a href="https://www.flaticon.com/" target="_blank" rel="noreferrer">
            Flaticon&nbsp;
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
