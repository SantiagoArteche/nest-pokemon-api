import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { PaginationDto } from './dto/pagination.dto';




@Controller('pokemon')
export class PokemonController {
  constructor(private pokemonService: PokemonService) {}

  @Get()
  getPokemon(@Query() queryParameters: PaginationDto) {
    return this.pokemonService.getAll(queryParameters);
  }

  @Get(':term')
  getPokemonById(@Param('term') term: string) {
    return this.pokemonService.findOne(term);
  }

  @Post()
  createPokemon(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonService.create(createPokemonDto);
  }

  @Put(':term')
  updatePokemon(
    @Param('term') term: string,
    @Body() updatePokemonDto: UpdatePokemonDto,
  ) {
    return this.pokemonService.update(term, updatePokemonDto);
  }

  @Delete(':term')
  deletePokemon(@Param('term') term: string) {
    return this.pokemonService.delete(term);
  }
}
