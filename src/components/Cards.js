import React, { useState } from "react";
import api from "../../src/api.js";
import "./Cards.css";

export default function Card() {
  const [imgcards, setImgcards] = useState("");
  const [nameCards, setNameCards] = useState([]);

  async function cards(e) {
    e.preventDefault();
    await api
      .get(`cards?q=!name:${nameCards}`)
      .then((res) => {
        if (res.data.data.length !== 0) {
          setImgcards(res.data);
        } else {
          window.alert("Digite o nome correto do pokémon");
        }
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className="container">
      <form onSubmit={(e) => cards(e)}>
        <input
          placeholder="Digite o nome de um Pokémon"
          onChange={(e) => setNameCards(e.target.value)}
          maxLength="20"
        />
        <button type="submit"> Buscar </button>
      </form>
      {imgcards.length !== 0 ? (
        <div>
          <div className="containerimg">
            <img src={imgcards.data[0].images.small} alt="Pokémon" />
          </div>
        </div>
      ) : null}
    </div>
  );
}
