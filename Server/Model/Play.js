import mongoose, { Schema } from "mongoose";

const playSchema = new Schema({
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

export const Play = mongoose.model("Play", playSchema);