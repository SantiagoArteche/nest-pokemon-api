import { IsString, IsPositive, MinLength, IsInt, Min } from 'class-validator';

export class CreatePokemonDto {
  @IsInt()
  @IsPositive()
  @Min(1)
  public nro: number;

  @IsString()
  @MinLength(1)
  public name: string;
}
