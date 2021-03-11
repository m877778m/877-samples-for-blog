import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleAuthService {
  login(): string {
      return 'Google login!!';
  }
}
