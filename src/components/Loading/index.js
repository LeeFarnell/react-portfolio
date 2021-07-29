import React from "react";

import BeatLoader from "react-spinners/BeatLoader";

import "./index.css";

const Loading = () => {
  return (
    <div className="loading">
      <BeatLoader size={15} color="#5bb0ba" />
    </div>
  );
};

export default Loading;
