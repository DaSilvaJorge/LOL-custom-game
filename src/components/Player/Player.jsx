import React from "react";
import "./Player.css";
import json from "../../data/champions.json";
import { ChampionCard } from "../Card/ChampionCard";

export const Player = ({ name, picks }) => {
  const renderListOfUserNames = ([names]) => {
    return names.map((champId, index) => (
      <li key={name + index}>{Object.keys(json.data)[champId]}</li>
    ));
  };

  return (
    <div className="player-card">
      <div className="player-name">
        <input type="text" defaultValue={name} />
      </div>
      <ul>{renderListOfUserNames(picks)}</ul>
      <div className="player-champ-options"> </div>
    </div>
  );
};
