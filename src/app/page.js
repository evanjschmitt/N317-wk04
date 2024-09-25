"use client";
import { useEffect, useState } from "react";

export default function Home() {
  // let score=0;
  const [score, setScore] = useState(1);
  const [pokemon, setPokemon] = useState({ id: 1 }); // Example state for pokemon

  function addToScore() {
    setScore(score + 1);
  }



 
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
