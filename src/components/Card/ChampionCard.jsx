import { useState } from "react";
import "./ChampionCard.css";

export const ChampionCard = (props) => {
  const [isActive, setIsActive] = useState(false);
  const handleImgClick = (e) => {
    setIsActive((current) => !current);
  };

  return (
    <div>
      <div className="championCard">
        <div className={`championCard-image${isActive ? "-selected" : ""}`}>
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/${props.champ}.png`}
            alt={`${props.champ} img`}
            onClick={handleImgClick}
          />
        </div>
        <div className={`championCard-name`}>{props.champ}</div>
      </div>
    </div>
  );
};
