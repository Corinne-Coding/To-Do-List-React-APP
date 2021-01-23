import UseAnimations from "react-useanimations";

// Icons from https://react.useanimations.com/
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";

const AnimatedIcon = ({ name, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <UseAnimations
        animation={
          name === "github" ? github : (name = "linkedin" ? linkedin : null)
        }
        strokeColor="#fff"
      />
    </a>
  );
};

export default AnimatedIcon;
