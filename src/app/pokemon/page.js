"use client";
import pokeStyles from "./pokemon.module.css";
import { useEffect, useState } from "react";

//Pokemon data
/**
 * @typedef {Object} pokemonApiObject This is the object for a pokemon
 * @prop {String} name Name of pokemon
 * @prop {Number} id id of pokemon
 * @prop {Object} sprites Object with all sprite references
 * @prop {String} sprites.front_default Default front image for sprite
 * @prop {Number} height Height of pokemon. Multiply by 10 make to centimeters.
 * @prop {Number} weight Weight of pokemon. Divide by 10 to make kilograms.
 */

export default function Pokemon() {
  const [pokemon, setPokemon] = useState({ sprites: {} });
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemonEnounters, setPokemonEncounters] = useState([])
  useEffect(function () {
    if (pokemon.id) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}/encounters`)
        .then((rawData) => {
          return rawData.json();
        })
        .then((pokeEncounters) => {
        //   console.log(pokeEncounters);
          setPokemonEncounters(pokeEncounters);
        })
        .catch((e) => {
          setPokemonEncounters([]);
        });
    } else {
        setPokemonEncounters([]);
    }
  },[pokemon]);
  console.count("viewed page");

  /**
   * @type {[pokemonApiObject, Function]}
   */

  /**
   * @type {[String, Function]}
   */

  function changeSearchTerm(e) {
    setSearchTerm(e.currentTarget.value.toLowerCase());
  }

  async function searchForPokemonByName() {
    try {
      const rawData = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchTerm}`
      );
      const pokeDataFormatted = await rawData.json();
      setPokemon(pokeDataFormatted);
      console.log(pokeDataFormatted);
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
      setPokemon({ name: searchTerm, sprites: {} });
    }
  }

  return (
    <main>
      <div className={pokeStyles.wholePage}>
        <h1>Pokemon Page</h1>
        <div className={pokeStyles.search}>
          <input
            type="search"
            id="search"
            name="search"
            value={searchTerm}
            onChange={changeSearchTerm}
          />
          <input
            name="search"
            type="button"
            value="search"
            onClick={searchForPokemonByName}
          />
        </div>
        <div className={pokeStyles.results}>
          <h3>{pokemon.name}</h3>
          <img src={pokemon.sprites.front_default} />
        </div>
      </div>
    </main>
  );
}
