import { Request,Response, NextFunction } from "express";
import { PostDto } from "../dto/Post.dto";
import { Post } from "../models";



//Create Post
export const CreatePost = async(req:Request,res:Response,next:NextFunction)=>{
    const {userId,text,time,comments,commenter} = <PostDto>req.body;
    const files = req.files as [Express.Multer.File];
    const images = files.map((file:Express.Multer.File)=>file.filename);
//    console.log(images)
    const createPost = await Post.create({
        userId:userId,
        text:text,
        images:images,
        time:time,
        comments:comments,
        commenter:commenter
    })
    const result = await createPost.save();
    res.set('Access-Control-Allow-Origin', 'http://localhost:9000');

    res.status(200).json(result);

}

//Test
export const Test=async(req:Request,res:Response,next:NextFunction)=>{
    res.send("Working");
}
//Get a Post
export const GetPost = async(req:Request,res:Response,next:NextFunction)=>{
    // const user = req.user;
     console.log('user');

        const posts = await Post.find();
        console.log(posts)
        if(posts!==null)
        {
            return res.status(200).json(posts)
        }
        return res.status(400).json({"message":"No Posts Availible"});

    
    return res.status(400).json({"message":"Posts information not found"});

}