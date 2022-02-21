import mongoose,{Schema,Document} from "mongoose";

interface CommentDoc extends Document{
    users:any;
    text:string;
    likes:any;
    isPost:boolean;
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
    isPost:{
        type:Boolean,
        default:false
    }
},
{
    timestamps:true
}
);

const Comment = mongoose.model<CommentDoc>('comment',CommentSchema);
export {Comment}