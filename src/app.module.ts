import { Module } from '@nestjs/common';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://santimongo:santimongo@localhost:27018/', {
      dbName: 'PokemonDB',
    }),

    PokemonModule,
  ],
})
export class AppModule {}
