import React from "react";

import { Card } from "../card/card.component";

import "./card-list.styles.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        // The key helps react have a unqiue way to track the monster object.
        // If it changes, it will only re-render the monster that needs to be re-rendered.
        // Rule of thumb: using the map function or working with a list of JSX elements
        // means you need to use a key attribute.
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
