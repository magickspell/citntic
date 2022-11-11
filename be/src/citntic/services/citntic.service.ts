import {Inject, Injectable} from '@nestjs/common';
import {Model} from "mongoose";
import {Quote} from "../interfaces/RateQuote.dto";



// basic service with methods

@Injectable()
export class CitnticService {
    constructor(
        @Inject('QUOTE_MODEL')
        private quoteModel: Model<Quote>,
    ) {}

    async getAll(): Promise<Quote[]> {
        return this.quoteModel.find().exec()
    }

    async getRandom(): Promise<Quote> {
        const data = await this.quoteModel.find().exec()
        const random = Math.floor(Math.random() * data.length)
        return data[random];
    }
}
