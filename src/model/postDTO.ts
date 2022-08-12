import { POST_TYPES } from "../enum/postTypes";

export interface PostInputDTO {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    author_id: string
}

