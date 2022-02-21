import mongoose,{Schema,Document} from "mongoose";

interface UserDoc extends Document{
    name:string;
    email:string;
    address:string;
    age:number;
    dp:string;
    phone:number;
    bio:string;
    instagram:string;
    followers:any;
    followings:any;
    dob:string;
    country:string;
    profession:string;
    allowMsg:boolean;
    posts:any;

}

const UserSchema = new Schema({
   
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
    },
    bio:{
        type:String
    },
    instagram:{
        type:String
    },
    followers:[{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'user'
    }],
    followings:[{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'user'
    }],
    dob:{
        type:String
    },
    country:{
        type:String
    },
    profession:{
        type:String
    },
    allowMsg:{
        type:Boolean,
        default:true
    },
    posts:[{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'post'
    }],


    address:{
        type:String,
    },
    age:{
        type:Number
    },
    dp:{
        type:String,
    },
    phone:{
        type:Number
    }

},
{
    timestamps:true
}
);

const User = mongoose.model<UserDoc>('user',UserSchema);
export {User}