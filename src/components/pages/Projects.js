import React from "react";
import CardGroup from "../portfolio/CardGroup";

import "../../Assets/css/Projects.css";

export default function Projects(props) {
  return (
    <div>
      <h1 className="title">journy of learning</h1>
      <h4 className="subtitle">check out my projects below <br/>that were developed during my school journey </h4>
      <CardGroup />
    </div>
  );
}
