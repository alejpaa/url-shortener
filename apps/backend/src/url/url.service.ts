import { Injectable } from '@nestjs/common';
import { ResponseShorterUrlDto } from './dtos/response-shor-url.dto';
import { createHash } from 'crypto';

@Injectable()
export class UrlService {
  private generateSlug(url: string) {
    return createHash('sha256').update(url).digest('base64url').slice(0, 6);
  }
  private miDominio = 'https://alem.code';

  health() {
    return 'Ok';
  }

  createShortUrl(originalUrl: string): ResponseShorterUrlDto {
    const slug = this.generateSlug(originalUrl);
    const shortUrl = `${this.miDominio}/${slug}`;
    return { shortUrl, originalUrl };
  }

  getSlug() {
    return 'Esta es tu url xd por ahora';
  }
}
