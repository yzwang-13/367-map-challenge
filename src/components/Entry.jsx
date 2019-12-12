import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={props.name}>
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );
}

function createEmoji(e) {
  return <Entry key={e.id} name={e.name} emoji={e.emoji} meaning={e.meaning} />;
}

export { Entry, createEmoji };
