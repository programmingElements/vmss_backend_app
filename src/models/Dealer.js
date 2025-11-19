import mongoose from "mongoose";

const dealerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    alternativePhone: {
        type: String,
    }
},
{
    timestamps: false
}
);

const Dealer = mongoose.model("Dealer", dealerSchema);

export default Dealer;