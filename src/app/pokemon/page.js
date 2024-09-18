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
    const [pokemon, setPokemon] =useState({});
    /**
     * @type {[String, Function]}
     */
    const [searchTerm, setSearchTerm] =useState("");
    function changeSearchTerm(e) {
        setSearchTerm(e.currentTarget.value)
    }

    return(<main>
        <main>
             <h1>Pokemon Page</h1>
             <div className={pokeStyles.search}>
                <input type="search" id="search" name="search" value={searchTerm} onChange={changeSearchTerm}></input>
                <input name="search"type="button" value="search"></input>
             </div>
        </main>
       

    </main>)   
}