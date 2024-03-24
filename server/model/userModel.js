import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    ticketNumber: {
        type: Number,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    quintal: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    aaya: {
        type: Boolean,
        required: true
    },
    mila: {
        type: Boolean,
        required: true
    }
});

export default mongoose.model("User", userSchema);
