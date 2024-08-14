import express from 'express';
import { Read } from '../Model/Read.js';

const route = express.Router();
route.use(express.json());

route.get("/read", async (req, res) => {
    const data = await Read.find();
    res.json(data);
});

route.post("/read", async (req, res) => {
    const data = new Read(req.body);
    await data.save();
    res.json(data);
});

export default route;
