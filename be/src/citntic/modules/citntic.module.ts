import { Module } from '@nestjs/common';
import {CitnticService} from "../services/citntic.service";
import {CitnticController} from "../controllers/citntic.controller";
import {DatabaseModule} from "../../mongodb/db.module";
import {quotesProviders} from "../../mongodb/quotes.providers";


// the root module of the application

@Module({
    imports: [DatabaseModule],
    controllers: [CitnticController],
    providers: [
        CitnticService,
        ...quotesProviders
    ],
})
export class CitnticModule {}