import { Injectable } from '@nestjs/common';

// basic service with methods (services is a providers)

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!!';
  }
}
