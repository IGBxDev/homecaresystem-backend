import { POST_TYPES } from "../enum/postTypes"


export type post = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    author_id: string
 }