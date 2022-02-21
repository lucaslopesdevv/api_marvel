import React from "react";

import "../../styles/Character.scss";

export default function Character({ children: character }) {
  return <div className="character-content">{character}</div>;
}
