import * as React from "react";
import "./styles.css";
import PokeCards from "./components/PokeCards";
import { mockPokemonsData } from "./mock/pokeData";

export default function App() {
  return (
    <div className="App">
      <PokeCards pokemonsData={mockPokemonsData} />
    </div>
  );
}
