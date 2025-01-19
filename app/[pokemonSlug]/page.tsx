import { getPokemonBySlug } from "@/lib/getPokemonBySlug";
import Image from "next/image";

interface PokemonPageParams {
  params: Promise<{
    pokemonSlug: string;
  }>;
}

export default async function PokemonDetailsPage({ params }: PokemonPageParams) {
  const { pokemonSlug } = await params;
  const pokemon = await getPokemonBySlug(pokemonSlug);

  return (
    <div className="p-4 flex flex-col relative">
      <h1 className="text-2xl font-bold">{ pokemon.name.toUpperCase() }</h1>

      <figure className="w-full h-auto">
        <Image
          src={
            pokemon.sprites.other?.["official-artwork"]?.front_default ||
            pokemon.sprites.front_default
          }
          alt={ pokemon.name }
          width={ 500 }
          height={ 500 }
          layout="intrinsic"
          priority
        />
      </figure>

      <p>Base Experience: { pokemon.base_experience }</p>
      <p>Height: { pokemon.height }</p>
      <p>Weight: { pokemon.weight }</p>
      <h2 className="mt-4 text-xl font-semibold">Abilities:</h2>
      <ul>
        { pokemon.abilities.map( ( ability ) => (
          <li key={ ability.ability.name }>{ ability.ability.name }</li>
        ) ) }
      </ul>
    </div>
  );
}