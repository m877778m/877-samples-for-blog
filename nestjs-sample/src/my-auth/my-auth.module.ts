import { Module } from '@nestjs/common';
import { MyAuthController } from './my-auth.controller';
import { MyAuthService } from './my-auth.service';

@Module({
  controllers: [MyAuthController],
  providers: [MyAuthService]
})
export class MyAuthModule {}
