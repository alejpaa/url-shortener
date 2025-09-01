import { IsOptional, IsUrl } from 'class-validator';

export class CreateShortUrlDto {
  @IsUrl()
  originalUrl: string;

  @IsOptional()
  drepcription?: string;
}
