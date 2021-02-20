export interface PokemonData {
  name: string;
  sprites: {
    front_default?: string;
    front_shiny?: string;
    back_default?: string;
    back_shiny?: string;
  };
  videoLink: string;
}
