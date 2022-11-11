import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {CitnticModule} from "./citntic/modules/citntic.module";

// the root module of the application

@Module({
  imports: [CitnticModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
