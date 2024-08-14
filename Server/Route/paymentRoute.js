import express from 'express';
import Payment from '../Model/Payment.js';

const route = express.Router();

route.use(express.json());

route.get("/", async (req, res) => {
  try {
    const data = await Payment.find();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error); 
    res.status(500).json({ message: error.message });
  }
});

route.post("/", async (req, res) => {
  try {
    console.log('Request body:', req.body);
    const data = new Payment(req.body);
    await data.save();
    res.json(data);
  } catch (error) {
    console.error('Error saving data:', error); 
    res.status(500).json({ message: error.message });
  }
});

export default route;