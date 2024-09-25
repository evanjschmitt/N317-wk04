"use client";
import { useEffect, useState } from "react";

export default function Home() {
  // let score=0;
  const [score, setScore] = useState(1);
  const [pokemon, setPokemon] = useState({ id: 1 }); // Example state for pokemon

  function addToScore() {
    setScore(score + 1);
  }

  // Define a function to fetch Pokemon data
  function fetchPokemonData() {
    if (pokemon.id) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}/encounters`)
        .then((response) => response.json())
        .then((data) => {
          console.log("Encounter data:", data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }

  useEffect(() => {
    fetchPokemonData();
  }, [pokemon.id]); // Run the effect whenever the pokemon id changes

  return (
    <main>
      <h1>Home</h1>
      <div>
        <button onClick={addToScore}>Add 1</button>
        <p>Score: {score}</p>
      </div>
    </main>
  );
}
