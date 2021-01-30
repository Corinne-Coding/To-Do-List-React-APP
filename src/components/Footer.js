// Components
import AnimatedIcon from "../components/AnimatedIcon";

// Images
import ReactImg from "../assets/img/react.png";

const Footer = () => {
  return (
    <footer className="column-center">
      <div className="line-center">
        <p>To-do List Project made with</p>
        <img src={ReactImg} alt="react icon" />
        <p>by Corinne - 2020</p>
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
