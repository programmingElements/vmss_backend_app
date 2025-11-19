import Dealer from "../models/Dealer.js";

const createDealer = async (req, res) => {
    try {
        const {name, phone, alternativePhone} = req.body;
        const dealer = new Dealer({
            name,
            phone,
            alternativePhone
        });
        const savedDealer = await dealer.save();
        return res.status(201).json({message: "Dealer Created Successfully!", data: savedDealer});
    } catch (error) {
        console.log("Error in createDealer controller", error);
        return res.status(500).json({ message: "Internal Server Error", err: error.message });
    }

}

const updateDealer = async (req, res) => {
    try {
        const dealerId = req.params.id;
        if (dealerId) {
            const dealerExisted = Dealer.findById(dealerId);
            if (!dealerExisted) {
                return res.status(404).json({message: "Dealer Not Found!"});
            }
        } else {
            return res.status(404).json({message: "Dealer Id Not Found!"});
        }
        const {name, phone, alternativePhone} = req.body;
        const updatedDealer = await Dealer.findByIdAndUpdate(dealerId, {name, phone, alternativePhone}, {new: true});
        if (!updatedDealer) return res.status(404).json({message: "Loan Not Found!"});
        return res.status(200).json({message: "Dealer Updated Successfully!", data: updatedDealer});
    } catch (error) {
        console.log("Error in updateDealer controller", error);
        return res.status(500).json({ message: "Internal Server Error", err: error.message });
    }

}

const getAllDealers = async (req, res) => {
    try {
        const dealers = await Dealer.find().sort({createdAt: -1}); // -1 will sort in desc. order (newest first)
        return res.status(200).json(dealers);
    } catch (error) {
        console.log("Error in getAllDealer controller", error);
        return res.status(500).json({ message: "Internal Server Error", err: error.message });
    }
} 

const getDealerById = async (req, res) => {
    try {
        const dealerId = req.params.id;
        if (dealerId) {
            const dealerExisted = await Dealer.findById(dealerId);
            if (!dealerExisted) {
                return res.status(404).json({message: "Dealer Not Found!"});
            }
        } else {
            return res.status(404).json({message: "Dealer Id Not Found!"});
        }
        const dealer = await Dealer.findById(dealerId);
        return res.status(200).json(dealer);
    } catch (error) {
        console.log("Error in getDealerById controller", error);
        return res.status(500).json({ message: "Internal Server Error", err: error.message });
    }
}

export {createDealer, updateDealer, getAllDealers, getDealerById};