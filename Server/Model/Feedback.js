import mongoose from 'mongoose';

const { Schema } = mongoose;

const feedbackSchema = new Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

export default Feedback;