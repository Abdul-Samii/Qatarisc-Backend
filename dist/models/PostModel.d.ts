import mongoose, { Document } from "mongoose";
interface PostDoc extends Document {
    users: any;
    text: string;
    images: [string];
    likes: any;
    comments: [string];
    commenter: any;
}
declare const Post: mongoose.Model<PostDoc, {}, {}, {}>;
export { Post };
