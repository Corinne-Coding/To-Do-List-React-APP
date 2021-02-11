// Components
import AnimatedIcon from "../components/AnimatedIcon";

// Images
import ReactImg from "../assets/img/react.png";

const Footer = () => {
  return (
    <footer className="column-center">
      <div className="line-center">
        <div className="line-center">
          <p>To-do List Project made with</p>
          <img src={ReactImg} alt="react icon" />
          <p>by Corinne - 2020</p>
        </div>

        <div className="line-center">
          <AnimatedIcon
            name="github"
            link="https://github.com/Corinne-Coding"
          />
          <AnimatedIcon
            name="linkedin"
            link="https://www.linkedin.com/in/corinne-pradier-6610201b2/"
          />
        </div>
      </div>
      <div className="hidden-576">
        <p>
          <span>Icon made by&nbsp;</span>

          <a
            href="https://www.flaticon.com/fr/auteurs/darius-dan"
            target="_blank"
            rel="noreferrer"
          >
            Darius Dan
          </a>
          <span>,&nbsp;</span>

          <a
            href="https://www.flaticon.com/authors/icongeek26"
            target="_blank"
            rel="noreferrer"
          >
            IconGeek26
          </a>
          <span>,&nbsp;</span>

          <a
            href="https://www.flaticon.com/authors/kiranshastry"
            target="_blank"
            rel="noreferrer"
          >
            Kiranshastry
          </a>
          <span>,&nbsp;</span>

          <a
            href="https://www.flaticon.com/authors/pixel-perfect"
            target="_blank"
            rel="noreferrer"
          >
            Pixel Perfect
          </a>
          <span>&nbsp;and&nbsp;</span>

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
