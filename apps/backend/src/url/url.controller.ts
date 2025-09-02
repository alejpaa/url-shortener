import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateShortUrlDto } from './dtos/create-short-url.dto';
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
  shorten(@Body() body: CreateShortUrlDto): ResponseShorterUrlDto {
    console.log('Body completo:', body);
    console.log('Tipo de body:', typeof body);
    console.log('Keys:', Object.keys(body || {}));

    // Intentar extraer la URL de diferentes formas
    const originalUrl = body?.originalUrl;
    console.log('URL extraída:', originalUrl);

    if (!originalUrl) {
      throw new Error('No se pudo encontrar la URL en el body');
    }

    return this.urlService.createShortUrl(originalUrl);
  }

  @Get('/slug')
  getSlug() {
    return this.urlService.getSlug();
  }
}
//
