import { Document, Schema, model } from "mongoose";

export interface IUser extends Document {
    username: string;
    email: string;
    password?: string;
    owner_of_docs: Array<Schema.Types.ObjectId>;
    valid_until: Date;
    token?: string;
    failed_attemps: number;
}

const userSchema = new Schema<IUser>(
    {
        username: { type: String, required: true},
        email: { type: String, required: true},
        password: { type: String, required: true, select: false },
        owner_of_docs: [{ 
            type: Schema.Types.ObjectId, 
            required:true, 
            ref: "File" 
        }],
        valid_until: { type: Date, required: true},
        failed_attemps: { type: Schema.Types.Number, required: true }
    }
);

export const userModel = model<IUser>("User", userSchema);