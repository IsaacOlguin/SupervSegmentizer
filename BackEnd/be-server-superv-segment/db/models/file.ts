import { Document, Schema, model } from 'mongoose';

export interface IFile extends Document {
    filename: string;
    content: string;
    date_upload: Date;
    list_accesible_by: Array<Schema.Types.ObjectId>;
    encoding: string;
    owner: Schema.Types.ObjectId;
    file_size: number;
    path: string;
}

const fileSchema = new Schema<IFile>(
    {
        filename: { type: String, required:true },
        content: { type: String, required: true },
        date_upload: { type: Date, required: true },
        list_accesible_by: [{
            type: Schema.Types.ObjectId,
            required: true,
            ref: "User"
        }],
        encoding: { type: String, required: true },
        owner: { type: Schema.Types.ObjectId, required: true },
        file_size: { type: Schema.Types.Number, required: true},
        path: { type: String, required: true }
    }
)

export const fileModel = model<IFile>("File", fileSchema);