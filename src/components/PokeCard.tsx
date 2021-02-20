import * as React from "react";
import { useState } from "react";
import { PokemonData } from "../types";

const PokeCard: React.FunctionComponent<PokemonData> = (props: PokemonData) => {
  const {
    name,
    sprites: { front_default },
    sprites: { front_shiny },
    sprites: { back_default },
    sprites: { back_shiny },
    videoLink
  } = props;
  const [showImageOnHover, setShowImageOnHover] = useState<boolean>(false);
  const image = front_default ? front_default : back_default;
  const imageOnHover = front_shiny ? front_shiny : back_shiny;

  return (
    <div
      className="layout"
      onMouseEnter={() => {
        setShowImageOnHover(true);
      }}
      onMouseLeave={() => {
        setShowImageOnHover(false);
      }}
    >
      <h1>{name}</h1>
      <a href={videoLink}>
        <img src={showImageOnHover ? imageOnHover : image} alt={name} />
      </a>
    </div>
  );
};

export default PokeCard;
