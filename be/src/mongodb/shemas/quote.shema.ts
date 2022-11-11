import * as mongoose from 'mongoose';

export const QuoteSchema = new mongoose.Schema({
    author: String,
    text: String,
    "text-eng": String,
    likes: Number,
    dislikes: Number,
    from: String
});