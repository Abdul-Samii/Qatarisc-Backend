import { Request,Response, NextFunction } from "express";
import { PostDto } from "../dto/Post.dto";
import { Post, User } from "../models";



//Create Post
export const CreatePost = async(req:Request,res:Response,next:NextFunction)=>{
    const {users,text,time,images,likes,comments,commenter} = <PostDto>req.body;
   console.log(req.body)


    const createPost = await Post.create({
        users:users,
        text:text,
        images:images,
        time:time,
        comments:comments,
        likes:likes,
        commenter:commenter
    })
    const result = await createPost.save();

    res.status(200).json(result);

}

//Test
export const Test=async(req:Request,res:Response,next:NextFunction)=>{
    res.send("Working");
}
//Get a Post
export const GetPost = async(req:Request,res:Response,next:NextFunction)=>{
    // const user = req.user;

        const posts = await Post.find().populate("users").populate("likes")
        if(posts!==null)
        {
            return res.status(200).json(posts)
        }
        return res.status(400).json({"message":"No Posts Availible"});

    
    return res.status(400).json({"message":"Posts information not found"});

}


//Like a Post
export const LikePost = async(req:Request,res:Response,next:NextFunction)=>{
    const availiblePost = await Post.findById({_id:"6212035328bcb0a6037801a1"})
if(availiblePost!==null)
{
    const likeUsers = availiblePost.likes.toString()
    const likechecker = likeUsers.includes("6212034428bcb0a60378019e")
console.log(likechecker)
    if(likechecker)
        {
            console.log("YO1")

            await Post.findByIdAndUpdate({_id:"6212035328bcb0a6037801a1"},{
                $pull:{
                    likes:"6212034428bcb0a60378019e"
                }
            });
        
        }
        else
        {    
            console.log("YO2")
            await Post.findByIdAndUpdate({_id:"6212035328bcb0a6037801a1"},{
            $push:{
                likes:"6212034428bcb0a60378019e"
            }
        });
    }
}
     res.status(200).json("no post");

}





//Comment a Post
export const CommentPost = async(req:Request,res:Response,next:NextFunction)=>{
    const availiblePost = await Post.findById({_id:req.body.postId})
if(availiblePost!==null)
{
    
    
            await Post.findByIdAndUpdate({_id:req.body.postId},{
            $push:{
                comments:req.body.comment,
                commenter:req.body.userId
            }
        });
    
}
     res.status(200).json("no post");

}