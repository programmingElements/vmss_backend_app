import mongoose from "mongoose";

// 1 - create a schema
// 2 - model based off of that schema

const consumerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    service_no: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    aadhar_no: {
        type: String,
    },
    first_payment: {
        type: Number,
        default: 0
    },
    first_payment_date: {
        type: Date,
        default: Date.now
    },
    second_payment: {
        type: Number,
        default: 0
    },
    second_payment_date: {
        type: Date,
        default: Date.now
    },
    margin_amount: {
        type: Number,
        default: 0
    },
    margin_amount_date: {
        type: Date,
        default: Date.now
    },
    total_project_cost: {
        type: Number,
        default: 0
    },
    reference: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Dealer"
    }
}, {
    timestamps: true // createdAt, updatedAt
});

const Consumer = mongoose.model("Consumer", consumerSchema);

export default Consumer;
