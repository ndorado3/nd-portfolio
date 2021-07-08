import React from "react";

import CardInfo from "../portfolio/CardInfo";
import "../../Assets/css/Projects.css";

export default function Card(props) {
  return (
    <div
      className="d-inline-block n-card"
      onClick={(e) => props.click(props.item)}
    >
      <img
        className="n-card-image"
        src={props.item.imgSrc}
        alt={props.item.imgSrc}
      />
      {props.item.selected && (
        <CardInfo
          title={props.item.title}
          subTitle={props.item.subTitle}
          link={props.item.link}
          repo={props.item.repo}
          prototype={props.item.prototype}
        />
      )}
    </div>
  );
}
