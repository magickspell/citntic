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

    random = 999
    async getRandom(random = this.random): Promise<Quote> {
        function randomLoop() {
            const result = Math.floor(Math.random() * data.length)
            if (result === random) {
                return randomLoop()
            } else {
                return result
            }
        }
        const data = await this.quoteModel.find().exec()
        const newRandom = randomLoop()
        this.random = newRandom
        return data[newRandom];
    }
}
