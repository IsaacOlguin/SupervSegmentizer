import { Document, Schema, model } from 'mongoose';

export interface IClass extends Document {
    class_name: string, 
    description: string,
    id_file: Schema.Types.ObjectId,
    color_hex: string
}

const classSchema = new Schema<IClass>({
    class_name: { type: String, required: true },
    description: { type: String, required: true },
    id_file: { type: Schema.Types.ObjectId, required: true, ref: "File" },
    color_hex: { type: String, required: true }
})

export const classModel = model<IClass>("Class", classSchema);
