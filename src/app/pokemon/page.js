"use client";
import { useState } from "react";
import pokeStyles from "./pokemon.module.css"


//Pokemon Data
/**
 * @typedef {Object} pokemonApiObject
 * @description This is the object for a Pokemon 
 * @prop {String} name Name of Pokemon
 * @prop {Object} sprites Object w all sprite refs
 * @prop {String} sprites.front_default default sprite img
 * @prop {Number} height Height of Pokemon (mult by 10 to make cm)
 * @prop {Number} weight Weight of Pokemon (div by 10 to make kg)
 */


export default function Pokemon() {
    /**
     * @type {[pokemonApiObject, function]}
     */
    const [pokemon, setPokemon] =useState({ sprites: {}});
    /**
     * @type {[String, Function]}
     */
    const [searchTerm, setSearchTerm] =useState("");
    function changeSearchTerm(e) {
        setSearchTerm(e.currentTarget.value.toLowerCase())
    }

async function searchPokemonName() {
console.log('search is searching')
    try {
        setPokemon(pokeDataFormatted);
    } catch (error) {
        setPokemon({name: searchTerm, sprites: {}});
    }

    const rawData = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
    const pokeDataFormatted = await rawData.json();
    console.log(dataFormatted);
}


    return(<main>
        <main>
             <h1>Pokemon Page</h1>
             <div className={pokeStyles.search}>
                <input type="search" id="search" name="search" value={searchTerm} onChange={changeSearchTerm}></input>
                <input name="search"type="button" value="search" onClick={searchPokemonName}></input>
                </div>
                <h3>
                    {pokemon.name}
                </h3>
                <img src={pokemon.sprites.font-default}/>
             
        </main>
       

    </main>)   
}