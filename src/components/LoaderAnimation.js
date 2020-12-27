import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// Animated loader from https://www.npmjs.com/package/react-loader-spinner
const LoaderAnimation = () => {
  return <Loader type="ThreeDots" color="#47c2ff" height={100} width={100} />;
};

export default LoaderAnimation;
