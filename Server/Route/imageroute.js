import express from 'express';
import { Image } from '../Model/Image.js';

const route = express.Router();
route.use(express.json());

route.get("/image", async (req, res) => {
    try {
        const data = await Image.find();
        res.json(data);
    } catch (error) {
        console.error('Error fetching images:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

route.post("/image", async (req, res) => {
    try {
        const data = new Image(req.body);
        await data.save();
        res.status(201).json(data); // Status 201 indicates successful resource creation
    } catch (error) {
        console.error('Error saving image:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

export default route;
