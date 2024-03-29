import axios from "axios";
import type {
  PokemonListResponse,
  PokeInfo,
  RelationDamageResponse,
} from "../types/pokedex";

const client = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export const getAllPokemon = async () => {
  const { data } = await client.get<PokemonListResponse>(`/pokemon?limit=151`);
  return data;
};

export const getPokemonInfo = async (name: string) => {
  const { data } = await client.get<PokeInfo>(`/pokemon/${name}`);
  return data;
};

export const getDamageRelations = async (type: string) => {
  const { data } = await client.get<RelationDamageResponse>(`/type/${type}`);
  return data;
};
