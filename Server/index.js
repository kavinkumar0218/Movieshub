import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import route from './Route/VideoRoute.js';
import route1 from './Route/imageroute.js';
import route2 from './Route/playroute.js';
import route3 from './Route/readroute.js';
import feedbackRoute from './Route/feedbackRoute.js';
import paymentRoute from './Route/paymentRoute.js';

const app = express();
app.use(express.json());
app.use(cors());

// Define routes with different base paths to avoid conflicts
app.use('/videos', route);
app.use('/images', route1); // Adjusted base path to be more descriptive
app.use('/play', route2);
app.use('/read', route3);
app.use('/feedback', feedbackRoute);
app.use('/payment', paymentRoute);

// MongoDB connection URI (consider using environment variables for sensitive data)
const mongoURI = process.env.MONGO_URI || "mongodb+srv://kavin0218e:kavinkumar0218@cluster0.brryn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB and start the server once connected
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("DB Connected");
    // Start the server only after the database connection is established
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((err) => {
    console.error("DB Connection Error:", err);
  });
