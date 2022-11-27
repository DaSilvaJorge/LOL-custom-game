// http://ddragon.leagueoflegends.com/cdn/12.22.1/data/en_US/champion.json
import { useState } from "react";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import { Player } from "./components/Player/Player";
import "./App.css";

function App() {
  //tipo de juego
  const [game, setGame] = useState({ players: [], game: 1 });

  //seteo tipo de juego
  const selectMode = (playersNumber, mode) => {
    const players = [];
    for (let i = 1; i <= playersNumber; i++) {
      players.push({ id: `${i}`, name: `Player${i}`, picks: [] });
    }
    setGame(() => {
      return { players: players, mode: mode };
    });
  };
  const playersHalf = game.players.length / 2;
  const team1 = game.players.slice(0, playersHalf);
  const team2 = game.players.slice(playersHalf);

  return (
    <div className="page-container">
      <Header onSetMode={selectMode} />
      <div className="main">
        {/* team1 */}
        <div className="team">
          <div className="team-name">
            <h2>Team 1</h2>
          </div>
          <div className="team-container">
            {(game.mode === 1 || game.mode === 2 || game.mode === 3) &&
              team1.map((player) => {
                return (
                  <Player
                    key={player.id}
                    name={player.name}
                    picks={[player.picks]}
                  />
                );
              })}
          </div>
        </div>
        {/* botones */}
        <Button setGame={setGame} game={game} />
        {/* team2 */}
        <div className="team">
          <div className="team-name">
            <h2>Team 2</h2>
          </div>
          <div className="team-container">
            {(game.mode === 1 || game.mode === 2 || game.mode === 3) &&
              team2.map((player) => {
                return (
                  <Player
                    key={player.id}
                    name={player.name}
                    picks={[player.picks]}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
