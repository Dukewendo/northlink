import {Controller, Get} from "@overnightjs/core";
import {Request, Response} from "express";
import PostJSON from '../database/posts.json'

@Controller('post')
export class PostController {

  @Get(':postId')
  async getFullPostById(req: Request, res: Response) {
    const filteredPosts = PostJSON.filter(post => post.id.toString() === req.params.postId);
    if (filteredPosts.length > 0) {
      res.status(200).json(filteredPosts[0]);
    } else {
      res.status(404).json({
        error: 'Post not found.'
      });
    }
  }
}