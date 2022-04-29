import React from "react";

export default function Entry(props) {
  return (
    <div className="entry">
      <div className="entry--intro">
        <a
          href={props.googleMapsUrl}
          className="entry--title"
          target="_blank"
          rel="noreferrer"
        >
          {props.title}, {props.location}
        </a>
        <p className="entry--date">
          {props.startDate} - {props.endDate}
        </p>
      </div>
      <img src={props.imageUrl} className="entry--image" alt="" />
      <p className="entry--description">{props.description}</p>
    </div>
  );
}
