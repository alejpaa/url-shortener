import { Controller, Get, Post } from '@nestjs/common';
import { UrlService } from './url.service';

@Controller()
export class UrlController {
  constructor(private urlService: UrlService) {}

  @Get('/health')
  getHealth() {
    return this.urlService.health();
  }

  @Post('/shorten')
  shorten() {
    return this.urlService.shorten();
  }

  @Get('/slug')
  getSlug() {
    return this.urlService.getSlug();
  }
}
