import { IsUrl } from 'class-validator';

export class ResponseShorterUrlDto {
  @IsUrl()
  shortUrl: string;

  @IsUrl()
  originalUrl: string;
}
