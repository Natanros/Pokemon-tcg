import React, { useEffect, useState } from "react";
import api from "./api";
import "./Allcards.css";

export default function AllCards() {
  const [imgcards, setImgcards] = useState({ data: [] });

  useEffect(() => {
    api
      .get("cards")
      .then((res) => {
        setImgcards(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(imgcards);
  return (
    <div className="container-all-cards">
      {imgcards?.data.length ? (
        imgcards.data
          .toSorted((a, b) => a.name.toString().localeCompare(b.name))
          .map((cartas) => {
            return (
              <div key={imgcards.id} className="cards">
                <img src={cartas.images.small} alt="Pokemon" />
                <p>{cartas.name}</p>
              </div>
            );
          })
      ) : (
        <div />
      )}
    </div>
  );
}
