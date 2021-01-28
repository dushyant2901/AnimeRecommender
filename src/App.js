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
      <h1
        style={{
          color: "#39FF14",
          border: "2px solid #39FF14 ",
          textAlign: "center",
          borderRadius: "1rem",
          padding: "1rem",
          margin: "0rem"
        }}
      >
        {" "}
        Anime Recommender{" "}
      </h1>

      <div className="btn">
        {Object.keys(animeDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#39FF14",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1.25rem 1.25rem",
              fontSize: "1.05rem",
              color: "black",

              fontFamily: "'Raleway', sans-serif"
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
                border: "1px solid #39FF14",
                width: "70%",
                margin: "1rem 2.5rem",
                borderRadius: "0.5rem",
                textAlign: "center"
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
