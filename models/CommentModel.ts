import mongoose,{Schema,Document} from "mongoose";

interface CommentDoc extends Document{
    users:any;
    text:string;
    likes:any;
    }

const CommentSchema = new Schema({
   user:[{
       type:mongoose.SchemaTypes.ObjectId,
       ref:'user',
   }],
    text:{
        type:String,
        required:true
    },
    likes:[{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'user'
    }],
},
{
    timestamps:true
}
);

const Comment = mongoose.model<CommentDoc>('comment',CommentSchema);
export {Comment}