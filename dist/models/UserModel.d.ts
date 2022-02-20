import mongoose, { Document } from "mongoose";
interface UserDoc extends Document {
    name: string;
    email: string;
    address: string;
    age: number;
    dp: string;
    phone: number;
}
declare const User: mongoose.Model<UserDoc, {}, {}, {}>;
export { User };
