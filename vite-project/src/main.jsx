import React, { useEffect } from "react";
import "./index.css";
import Pokeinfo from "./Components/pokeinfo";
import { useState } from "react";
import { useEffect } from "react";

const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");

  const pokeFun = async () => {
    setLoading(true);
  };

  useEffect(() => {
    pokeFun();
  }, [url]);
  return (
    <>
      <div className="container">
        <div className="left-container">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <div className="btn-group">
            <button>Previous</button>
            <button>Next</button>
          </div>
        </div>
        <div className="right-content">
          <Pokeinfo />
        </div>
      </div>
    </>
  );
};
export default Main;
