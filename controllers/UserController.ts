import { Request,Response, NextFunction } from "express";
import { PostDto } from "../dto/Post.dto";
import { Post } from "../models";



//Create Post
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


//Get a Post
export const GetPost = async(req:Request,res:Response,next:NextFunction)=>{
    // const user = req.user;
    // console.log(user);
        const posts = await Post.findById({_id:req.body.id});
        if(posts!==null)
        {
            return res.status(200).json(posts)
        }
        return res.status(400).json({"message":"No Posts Availible"});

    
    return res.status(400).json({"message":"Posts information not found"});

}