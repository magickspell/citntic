import { Connection } from 'mongoose';
import {QuoteSchema} from "./shemas/quote.shema";

const config = require('dotenv').config().parsed // config with dotenv for mongodb

export const quotesProviders = [
    {
        provide: 'QUOTE_MODEL',
        useFactory: (connection: Connection) => connection.model(config.COLLECTION_NAME, QuoteSchema), // quotes - name of collection
        inject: ['DATABASE_CONNECTION'],
    },
];