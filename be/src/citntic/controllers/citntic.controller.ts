import {Body, Controller, Get, Post} from '@nestjs/common';
import {CitnticService} from '../services/citntic.service';
import {Quote} from "../interfaces/RateQuote.dto";

@Controller()
export class CitnticController {
    constructor(private readonly citnticService: CitnticService) {
    }

    @Get('all')
    async getAll(): Promise<Quote[]> {
        return this.citnticService.getAll();
    }
    @Get('random')
    getRandom(): Promise<Quote> {
        return this.citnticService.getRandom();
    }
    @Post('like')
    async like(@Body() likeQuote: any) {
        return 'like quote'
    }
    @Post()
    async dislike(@Body('dislike') likeQuote: any) {
        return 'dislike quote'
    }

}
