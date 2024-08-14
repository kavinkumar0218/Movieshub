import express from 'express';
import Feedback from '../Model/Feedback.js'; 

const route = express.Router();
route.use(express.json());


route.get("/", async (req, res) => {
  try {
    const data = await Feedback.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


route.post("/", async (req, res) => {
  try {
    const data = new Feedback(req.body);
    await data.save();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default route;