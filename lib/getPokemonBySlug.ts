import { notFound } from "next/navigation";

export interface PokemonResponse {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  sprites: {
    front_default: string;
    back_default: string;
    other?: {
      "official-artwork"?: {
        front_default: string;
      };
    };
  };
}

export async function getPokemonBySlug(name: string): Promise<PokemonResponse> {
  // await new Promise((resolve) => setTimeout(resolve, 20000));

  const url = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`;
  const response = await fetch(url);


  if (!response.ok) {
    notFound();
  }

  return await response.json() as PokemonResponse;
}