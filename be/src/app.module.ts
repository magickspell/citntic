import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {CitnticModule} from "./citntic/modules/citntic.module";
import {EventsModule} from "./websocket-chat/events.module";
import {EventsGateway} from "./websocket-chat/events.gateway";

// the root module of the application

@Module({
    imports: [
        CitnticModule,
        EventsModule
    ],
    controllers: [AppController],
    providers: [
        AppService,
    ],
})
export class AppModule {
}
