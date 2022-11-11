// DTO (Data Transfer Object)
import { Document } from 'mongoose';

export interface Quote extends Document {
    readonly author: string
    readonly text: string
    readonly "text-eng": string
    readonly likes: number
    readonly dislikes: number
    readonly from: string
}