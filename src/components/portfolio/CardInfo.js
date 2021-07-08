import React from "react";
import { useSpring, animated } from "@react-spring/web";

import "../../Assets/css/Projects.css";

export default function CardInfo(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div className="n-card-info list-group" style={style}>
      <p className="n-card-title">{props.title}</p>
      <p className="n-card-subtitle">{props.subTitle}</p>
      <a className="n-card-links" href={props.link} target="_blank" rel="noopener noreferrer">
        Visit {props.title} website
      </a>
      <a className="n-card-links" href={props.repo} target="_blank" rel="noopener noreferrer">
        Take a look at the repo
      </a>
      <a className="n-card-links" href={props.prototype} target="_blank" rel="noopener noreferrer">
        Take a look at the prototype
      </a>
    </animated.div>
  );
}
