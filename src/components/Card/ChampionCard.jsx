import React from "react";

export const ChampionCard = (props) => {
  console.log(props);
  return (
    <div>
      <div className="ChampionCard">
        {/* <div className="ChampionCard__image">{props.champ}</div> */}
        <div className="ChampionCard__name">{props.champ}</div>
      </div>
    </div>
  );
};
