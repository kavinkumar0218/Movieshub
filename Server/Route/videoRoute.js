import express from 'express';
import { Video } from '../Model/Video.js';

const route = express.Router();
route.use(express.json());

route.get("/video", async (req, res) => {
    const data = await Video.find();
    res.json(data);
});

route.post("/video", async (req, res) => {
    const data = new Video(req.body);
    await data.save();
    res.json(data);
});

export default route;
