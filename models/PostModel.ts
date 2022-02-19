import mongoose,{Schema,Document} from "mongoose";

interface PostDoc extends Document{
    userId:string;
    text:string;
    images:[string];
    likes:any;
    comments:[string];
    commenter:any;
}

const PostSchema = new Schema({
   userId:[{
       type:mongoose.SchemaTypes.ObjectId,
       ref:'users',
   }],
    text:{
        type:String,
        required:true
    },
    images:{
        type:[String],
    },
    likes:[{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'users'
    }],
    comments:{
        type:[String]
    },
    commenter:[{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'users'
    }],

},
{
    timestamps:true
}
);

const Post = mongoose.model<PostDoc>('post',PostSchema);
export {Post}