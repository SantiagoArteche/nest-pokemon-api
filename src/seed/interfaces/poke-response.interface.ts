export interface PokemonResponse {
  count: number;
  next: string;
  previous: null;
  results: SimplePokemon[];
}

export interface SimplePokemon {
  name: string;
  url: string;
}
