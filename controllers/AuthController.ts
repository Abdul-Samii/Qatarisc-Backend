import { Request,Response,NextFunction } from "express";
import { User } from "../models";
import { CreateUserInput } from "../dto";


//Create User
export const RegisterUser = async(req:Request,res:Response,next:NextFunction)=>{
    console.log(req.body)
    const {name,email,address,phone,dp,bio,instagram,followers,followings,dob,country,profession,allowMsg} = <CreateUserInput>req.body;
    const createUser = await User.create({
        name:name,
        email:email,
        address:address,
        phone:phone,
        dp:dp,
        bio:bio,
        instagram:instagram,
        followers:followers,
        followings:followings,
        dob:dob,
        country:country,
        profession:profession,
        allowMsg:allowMsg
    })
    const result = await createUser.save();

    res.status(200).json(result);

}
