import { PostDatabase } from "../data/PostDatabase";
import { PostInputDTO } from "../model/postDTO";
import {generateId}  from "../Services/generateId";

export class PostBusiness {
    public createPost = async (input: PostInputDTO) => {
        try {
            const {photo, description, type, author_id} = input;

            if(!photo || !description || !type || !author_id ) {
                throw new Error ("algum dos campos está faltando.");
            }

            const postDatabase = new PostDatabase();
            await postDatabase.insertPost(input); 

        } catch (error: any) {
            throw new Error(error.message);
        }
    };

    public findPostById = async(idPost: string)=>{
        try {
           const postDatabase = new PostDatabase()
           return await postDatabase.findPostById(idPost)
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public findPostFriendsByUserId = async(userId: string)=>{
        try {
            const postDatabase = new PostDatabase() 
            return await postDatabase.findPostFriendsByUserId(userId)
        } catch (error: any) {
            return error
        }
    }
}

