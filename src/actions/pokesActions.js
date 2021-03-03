import { GET_ALL_POKE, GET_POKE, LOADING, ERROR } from "../types/PokesTypes";
import axios from "axios";

export const getAllPokes = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const {
      data: { results },
    } = await axios.get("https://pokeapi.co/api/v2/pokemon/");

    const pokemons = {};
    const getAllPokemons = results.map(
      async (pokemon) => await axios.get(pokemon.url)
    );

    const allPokemons = await Promise.all(getAllPokemons);
    allPokemons.map((infoPokemon) => {
      const { data: pokemon } = infoPokemon;
      return (pokemons[pokemon.id] = {
        ...pokemons[pokemon.id],
        name: pokemon.name,
        id: pokemon.id,
        image: pokemon.sprites.other.dream_world.front_default,
        types: pokemon.types.map((index) => index.type.name),
        experience: pokemon.base_experience,
      });
    });
    console.log(pokemons);
    dispatch({
      type: GET_ALL_POKE,
      payload: pokemons,
    });
  } catch (error) {
    console.error("Error", error.message);
    dispatch({
      type: ERROR,
      payload: error,
    });
  }
};

export const getPokemon = (id) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });

  try {
    const { data: info } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );

    const pokemon = {};
    pokemon["id"] = info.id;
    pokemon["name"] = info.name;
    pokemon["height"] = info.height;
    pokemon["weight"] = info.weight;
    pokemon["image"] = info.sprites.other.dream_world.front_default;
    pokemon['experience'] = info.base_experience;
    pokemon["abilities"] = [];

    const getAbilities = info.abilities.map(
      async (ab) => await axios.get(ab.ability.url)
    );

    const allAbilities = await Promise.all(getAbilities);
    allAbilities.map((ability) => {
      const { data } = ability;
      return pokemon["abilities"].push({
        id: data.id,
        name: data.name,
        effect: data.effect_entries.map((ef) => ({
          language: ef.language.name,
          effect: ef.short_effect,
        })),
      });
    });
  
    dispatch({
      type: GET_POKE,
      payload: pokemon,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error,
    });
  }
};
