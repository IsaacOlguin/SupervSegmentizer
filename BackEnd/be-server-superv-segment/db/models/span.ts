import { Document, Schema, model } from 'mongoose';

export interface ISpan extends Document {
    start_position: number;
    end_position: number;
    id_user: Schema.Types.ObjectId;
    id_file: Schema.Types.ObjectId;
    id_class: Schema.Types.ObjectId;
}

const spanSchema = new Schema<ISpan>({
    start_position: { type: Schema.Types.Number, required: true },
    end_position: { type: Schema.Types.Number, required: true },
    id_user: { 
        type: Schema.Types.ObjectId,
        required: true, 
        ref: "User"
    },
    id_file: {
        type: Schema.Types.ObjectId,
        required: true, 
        ref: "File"
    },
    id_class: {
        type: Schema.Types.ObjectId,
        required: true, 
        ref: "Class"
    }
})

export const spanModel = model<ISpan>("Span", spanSchema);