import "./Button.css";

const Button = ({ game, setGame }) => {
  // random num
  const getRandomId = (min = 0, max = 161) => {
    return Math.ceil(Math.random() * (max - min) + min);
  };
  const handleRoll = () => {
    const arrayPlayer = Array(game.mode)
      .fill(0)
      .map(() => getRandomId());
    return arrayPlayer;
  };

  //paso final picks
  const rollStart = () => {
    game.players.map((player) => (player.picks = handleRoll()));
    setGame({ ...game, ...game.players });
  };
  return (
    <div className="buttons">
      <button className="button" type="button" onClick={rollStart}>
        Roll Champs
      </button>
    </div>
  );
};

export default Button;
