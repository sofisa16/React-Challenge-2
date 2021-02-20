import * as React from "react";
import { PokemonData } from "../types";
import PokeCard from "./PokeCard";

interface PokeCardsProps {
  pokemonsData: PokemonData[];
}

const PokeCards: React.FunctionComponent<PokeCardsProps> = (
  props: PokeCardsProps
) => {
  const { pokemonsData } = props;

  function allPokeCards() {
    const pokeCards = [];
    pokemonsData.sort((a: PokemonData, b: PokemonData) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    for (const pokemon of pokemonsData) {
      pokeCards.push(<PokeCard {...pokemon} />);
    }
    return pokeCards;
  }

  return <div>{allPokeCards()}</div>;
};

export default PokeCards;
