import { Body, Controller, Get, Post } from '@nestjs/common';
import { UrlService } from './url.service';
import type { CreateShortUrlDto } from './dtos/create-short-url.dto';

@Controller()
export class UrlController {
  constructor(private urlService: UrlService) {}

  @Get('/health')
  getHealth() {
    return this.urlService.health();
  }

  @Post('/shorten')
  shorten(@Body() url: CreateShortUrlDto): any {
    return this.urlService.createShortUrl(url.originalUrl);
  }

  @Get('/slug')
  getSlug() {
    return this.urlService.getSlug();
  }
}
