import { Injectable } from '@nestjs/common';
import {
  PokemonResponse,
  SimplePokemon,
} from './interfaces/poke-response.interface';
import { Model } from 'mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
  ) {}

  async execute() {
    await this.pokemonModel.deleteMany();

    const { results }: PokemonResponse = await fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=500',
    ).then((res) => res.json());

    const promisesArray = [];
    results.forEach(async ({ name, url }: SimplePokemon) => {
      const nro = +url.split('/')[6];

      promisesArray.push(this.pokemonModel.create({ name, nro }));
    });

    await Promise.all(promisesArray);

    return 'Seed executed';
  }
}
