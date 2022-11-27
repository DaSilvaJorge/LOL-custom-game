import "./ChampionCard.css";

export const ChampionCard = (props) => {
  return (
    <div>
      <div className="championCard">
        <div className="championCard-image">
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/${props.champ}.png`}
            alt={`${props.champ} img`}
          />
        </div>
        <div className="championCard-name">{props.champ}</div>
      </div>
    </div>
  );
};
