import { Request,Response, NextFunction } from "express";
import { CommentDto, PostDto } from "../dto/Post.dto";
import { Comment, Post, User } from "../models";



//Create Post
export const CreatePost = async(req:Request,res:Response,next:NextFunction)=>{
    const {users,text,time,images,likes,comments} = <PostDto>req.body;
   console.log(req.body)


    const createPost = await Post.create({
        users:users,
        text:text,
        images:images,
        time:time,
        comments:comments,
        likes:likes,
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

        const posts = await Post.find().populate("users").populate("likes").populate("comments").populate("comments.user")
        if(posts!==null)
        {
            return res.status(200).json(posts)
        }
        return res.status(400).json({"message":"No Posts Availible"});

    
    return res.status(400).json({"message":"Posts information not found"});

}


//Like a Post
export const LikePost = async(req:Request,res:Response,next:NextFunction)=>{
    const availiblePost = await Post.findById({_id:req.body.postId})
if(availiblePost!==null)
{
    const likeUsers = availiblePost.likes.toString()
    const likechecker = likeUsers.includes(req.body.userId)
console.log(likechecker)
    if(likechecker)
        {
            console.log("YO1")

            await Post.findByIdAndUpdate({_id:req.body.postId},{
                $pull:{
                    likes:req.body.userId
                }
            });
        
        }
        else
        {    
            console.log("YO2")
            await Post.findByIdAndUpdate({_id:req.body.postId},{
            $push:{
                likes:req.body.userId
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
    const commentNew = await Comment.create({
        user:req.body.userId,
        text:req.body.text,
    })
    
console.log(commentNew)    
            const yesh=  await Post.findByIdAndUpdate({_id:req.body.postId},{
            $push:{
                comments:commentNew._id
            }
        });
console.log("y ",yesh)
    
}
     res.status(200).json("no post");

}


//Like a Comment
export const LikeComment = async(req:Request,res:Response,next:NextFunction)=>{
    const availibleComment = await Comment.findById({_id:req.body.commentId})
if(availibleComment!==null)
{
    const likeUsers = availibleComment.likes.toString()
    const likechecker = likeUsers.includes(req.body.userId)
console.log(likechecker)
    if(likechecker)
        {

            await Comment.findByIdAndUpdate({_id:req.body.commentId},{
                $pull:{
                    likes:req.body.userId
                }
            });
        
        }
        else
        {    
            await Comment.findByIdAndUpdate({_id:req.body.commentId},{
            $push:{
                likes:req.body.userId
            }
        });
    }
}


     res.status(200).json("no post");


    }



    //GET USER 

export const GetUser = async(req:Request,res:Response,next:NextFunction)=>{
    // const user = req.user;
console.log(req.body.userId)
        const users = await User.findById(req.body.userId)
        if(users!==null)
        {
            return res.status(200).json(users)
        }
        return res.status(404).json({"message":"No Users Availible"});

    

}

