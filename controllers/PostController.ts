import { Request,Response, NextFunction } from "express";
import { PostDto } from "../dto/Post.dto";
import { Post } from "../models";


export const CreatePost = async(req:Request,res:Response,next:NextFunction)=>{
    const {userId,text,images,time,comments,commenter} = <PostDto>req.body;
    const createPost = await Post.create({
        userId:userId,
        text:text,
        images:images,
        time:time,
        comments:comments,
        commenter:commenter
    })
    createPost.save();
    res.status(200).json({"Message":"OK"});

}