import * as mongoose from 'mongoose';

const config = require('dotenv').config().parsed // config with dotenv for mongodb


export const dbProvider = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect(`mongodb+srv://${config.USER}:${config.PASS}@cluster0.wh26qcf.mongodb.net/${config.DB_NAME}?retryWrites=true&w=majority`), // citntic - db name
    },
];