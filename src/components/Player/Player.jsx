import "./Player.css";
import json from "../../data/champions.json";
import { ChampionCard } from "../Card/ChampionCard";
import Clip from "../Spinners/Clip";

export const Player = ({ name, picks }) => {
  const renderListOfUserNames = ([names]) => {
    return names.map((champId, index) => (
      <ChampionCard
        key={name + index}
        champ={Object.keys(json.data)[champId]}
      />
    ));
  };

  return (
    <div className="player-card">
      <div className="player-name">
        <input type="text" defaultValue={name} />
      </div>
      {picks[0].length === 0 && <Clip />}
      <div className="player-champ-options">{renderListOfUserNames(picks)}</div>
    </div>
  );
};
