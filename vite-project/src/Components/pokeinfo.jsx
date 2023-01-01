import React from "react";

const Pokeinfo = () => {
  return (
    <>
      <h1>Charmander</h1>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
        alt=""
      />
      <div Classname="abilities">
        <div className="group">
          <h2>blaze</h2>
        </div>
        <div className="group">
          <h2>solar-power</h2>
        </div>
      </div>
      <div className="base-stat">
        <h3>Hp:30</h3>
        <h3>attack:52</h3>
        <h3>defence:43</h3>
        <h3>special-attack:50</h3>
        <h3>Speed</h3>
      </div>
    </>
  );
};
export default Pokeinfo;
