import mongoose from 'mongoose';
const { Schema } = mongoose;

const PaymentSchema = new Schema({
    Name: String,
    country: String,
    card_Name: String,
    card_Number: Number, 
    cvv: String,
    Payment: String,
});

const Payment = mongoose.model('Payment', PaymentSchema);
export default Payment;