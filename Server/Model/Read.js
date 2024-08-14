import mongoose, { Schema } from "mongoose";

const readSchema = new Schema({
    title: {
        type: String,
        required: true, // Ensure every video has a title
    },
    image: {
        type: String,
        required: true, // Ensure every video has an image URL or path
    },
    description: String,
    releaseDate: Date,
    rating: Number,
});

export const Read = mongoose.model("Read", readSchema);