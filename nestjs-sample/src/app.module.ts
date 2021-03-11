import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleAuthModule } from './google-auth/google-auth.module';
import { MyAuthModule } from './my-auth/my-auth.module';

@Module({
  imports: [GoogleAuthModule, MyAuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
