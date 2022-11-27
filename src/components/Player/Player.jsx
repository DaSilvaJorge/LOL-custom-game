import React from "react";
import "./Player.css";
import json from "../../data/champions.json";
import { ChampionCard } from "../Card/ChampionCard";

export const Player = ({ name, picks }) => {
  const renderListOfUserNames = ([names]) => {
    return names.map((champId, index) => (
      <ChampionCard
        key={name + index}
        champ={Object.keys(json.data)[champId]}
      />
    ));
  };
  // console.log(json.data.Aatrox.name);

  return (
    <div className="player-card">
      <div className="player-name">
        <input type="text" defaultValue={name} />
      </div>
      {renderListOfUserNames(picks)}
      <div className="player-champ-options"> </div>
    </div>
  );
};
