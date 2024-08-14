import express from 'express';
import { Play } from '../Model/Play.js';

const route = express.Router();
route.use(express.json());

route.get("/play", async (req, res) => {
    const data = await Play.find();
    res.json(data);
});

route.post("/play", async (req, res) => {
    const data = new Play(req.body);
    await data.save();
    res.json(data);
});

export default route;
