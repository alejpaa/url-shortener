import { Injectable } from '@nestjs/common';

@Injectable()
export class UrlService {
  health() {
    return 'Ok';
  }

  shorten() {
    return 'in process XD';
  }

  getSlug() {
    return 'Esta es tu url xd por ahora';
  }
}
