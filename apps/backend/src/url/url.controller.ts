import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import type { CreateShortUrlDto } from './dtos/create-short-url.dto';
import { ResponseShorterUrlDto } from './dtos/response-shor-url.dto';
import { UrlService } from './url.service';

@Controller()
export class UrlController {
  constructor(private urlService: UrlService) {}

  @Get('/health')
  getHealth() {
    return this.urlService.health();
  }

  @Post('/shorten')
  shorten(@Body() url: CreateShortUrlDto): ResponseShorterUrlDto {
    return this.urlService.createShortUrl(url.originalUrl);
  }

  @Get('/slug')
  getSlug() {
    return this.urlService.getSlug();
  }
}
// 