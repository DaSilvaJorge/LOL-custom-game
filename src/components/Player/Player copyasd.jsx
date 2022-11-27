import React from "react";
import "./Player.css";
import json from "../../data/champions.json";

export const Player = (props) => {
  return (
    <div className="player-card">
      <div className="player-name">
        <input type="text" defaultValue={props.name} />
      </div>
      <div className="player-champ">
        {/* {props.picks.length &&
          props.picks.map((el) => {
            return <p key={props.picks}>{Object.keys(json.data)[el]}</p>;
          })} */}

        {props.picks.length > 0 &&
          props.picks.map((picks) => <div>{picks}</div>)}
      </div>
      <div className="player-champ-options"> </div>
    </div>
  );
};
