import React from "react";
import "./styles.css";
import { useState } from "react";
import { animeDB } from "./database";

export default function App() {
  const [selectedGenre, setGenre] = useState("Horror");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{ color: "yellow", textAlign: "center" }}>
        {" "}
        Anime Recommender{" "}
      </h1>
      <p style={{ fontSize: "1rem", color: "yellow" }}>
        {" "}
        Select a genre to get recommendations{" "}
      </p>

      <div>
        {Object.keys(animeDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "yellow",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.9rem",
              fontSize: "1.05rem",
              color: "black"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left", color: "yellow" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {animeDB[selectedGenre].map((anime) => (
            <li
              key={anime.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div>
                <img className="image" src={anime.image} alt={""} />

                <div className="name"> {anime.name} </div>
                <div className="description"> {anime.desc} </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
