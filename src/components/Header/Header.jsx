import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = (props) => {
  //jugadores
  const [players, setPlayers] = useState(2);
  //modo juego
  const [mode, setMode] = useState(1);

  //value de num players
  const playersHandler = (e) => {
    setPlayers(Number(e.target.value));
  };
  //value de modo
  const modeHandler = (e) => {
    setMode(Number(e.target.value));
  };
  //seteo de modo
  const selectMode = () => {
    // e.preventDefault();
    props.onSetMode(players, mode);
  };

  useEffect(() => {
    selectMode(); //borre params
    // eslint-disable-next-line
  }, [players, mode]);

  return (
    <form action="" onSubmit={selectMode} className="main-header">
      <div className="form-group">
        <label htmlFor="players">Total Players:</label>
        <input
          name="players"
          type="number"
          min={2}
          max={10}
          step={2}
          defaultValue={2}
          onChange={playersHandler}
        />
      </div>

      <div className="form-group">
        <label htmlFor="modo">Mode:</label>
        <select type="select" name="modo" onChange={modeHandler}>
          <option value={1}>1 Champ random</option>
          <option value={2}>2 Champs randoms</option>
          <option value={3}>3 Champs randoms</option>
          {/* <option value={20}>Pool 20 Champs Randoms</option> */}
        </select>
      </div>
    </form>
  );
};

export default Header;
