export interface CreateUserInput{
    name:string;
    address:string;
    phone:string;
    email:string;
    password:string;
    dp:string;
    bio:string;
    instagram:string;
    followers:any;
    followings:any;
    dob:string;
    country:string;
    profession:string;
    allowMsg:boolean;
    post:any;
}

export interface LoginLoginInputs{
    email:string;
    password:string;
}

export interface UserPayload{
    _id:string;
    email:string;
    name:string;
}