import { Request, Response } from "express"
import { PostBusiness } from "../business/PostBusiness";
import { POST_TYPES } from "../enum/postTypes";
import { PostInputDTO } from "../model/postDTO";
import  {generateId}  from "../Services/generateId";

export class PostController {
  public createPost = async (req: Request, res: Response) => {
    try {
      const {photo, description, author_id } = req.body;

      const input: PostInputDTO = {
        id: generateId(),
        photo: photo,
        description: description,
        type: POST_TYPES.EVENT,
        createdAt: new Date,
        author_id: author_id
      };

      const postBusiness = new PostBusiness();
      await postBusiness.createPost(input);

      res.status(201).send({ message: "Post criado!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };


  public findPostById = async (req: Request, res: Response)=>{
    try {
      const postBusiness = new PostBusiness();
      const post = await postBusiness.findPostById(req.params.id)
      res.status(200).send(post)
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  public findPostFriendsByUserId = async (req: Request, res: Response)=>{
    try {
      const postBusiness = new PostBusiness();
      const allFriendPost = await postBusiness.findPostFriendsByUserId(req.params.id)
      res.status(200).send(allFriendPost)
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}