import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// Animated loader from https://www.npmjs.com/package/react-loader-spinner
const LoaderAnimation = ({ type, height, width }) => {
  return <Loader type={type} color="#47c2ff" height={height} width={width} />;
};

export default LoaderAnimation;
