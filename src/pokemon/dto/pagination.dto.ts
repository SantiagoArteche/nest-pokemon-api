import { IsInt, IsOptional, IsPositive, Min } from 'class-validator';

type sortOptions = 'asc' | 'desc' | 1 | -1;

export class PaginationDto {
  @IsOptional()
  @IsInt()
  @IsPositive()
  @Min(1)
  public limit?: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  public offset?: number;

  @IsOptional()
  public sort?: sortOptions;
}
