import mongoose,{Schema,Document} from "mongoose";

interface PostDoc extends Document{
    users:any;
    text:string;
    images:[string];
    likes:any;
    comments:any;
}

const PostSchema = new Schema({
   users:[{
       type:mongoose.SchemaTypes.ObjectId,
       ref:'user',
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
        ref:'user'
    }],

   comments:[{
       type:mongoose.SchemaTypes.ObjectId,
       ref:'comment'
   }]
   

},
{
    timestamps:true
}
);

const Post = mongoose.model<PostDoc>('post',PostSchema);
export {Post}