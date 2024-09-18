
"use client";

import { useState } from "react";

export default function Home() {

// let score=0;
const [score, setScore] = useState(1);

// console.log(score);

function addToScore() {
  // score++;
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
