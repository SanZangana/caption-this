import NoResults from "../assets/no-results.png";
import React from "react";
import styles from "../styles/NotFound.module.css";
import Asset from "./Assets";

const NotFound = () => {
  return (
    <div>
      <NotFound />
      <Asset
        src={NoResults}
        message={`Sorry, the page you're looking for doesn't exist`}
      />
    </div>
  );
};

export default NotFound;
