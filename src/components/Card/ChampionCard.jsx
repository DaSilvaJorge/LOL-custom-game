import React from "react";

export const ChampionCard = (props) => {
  return (
    <div>
      <div className="ChampionCard">
        <div className="ChampionCard__image">img</div>
        <div className="ChampionCard__name">{props.name}</div>
      </div>
    </div>
  );
};
