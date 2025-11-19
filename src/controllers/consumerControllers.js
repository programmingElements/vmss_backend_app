import Consumer from "../models/Consumer.js";

export const getAllConsumers = async (req, res) => {
    try {
        const consumers = await Consumer.find().sort({createdAt: -1}); // -1 will sort in desc. order (newest first)
        return res.status(200).json(consumers);
    } catch (error) {
        console.log("Error in getAllConsumers controller", error);
        return res.status(500).json({ message: "Internal Server Error", err: error.message });
    }
}

export const getConsumerById = async (req, res) => {
    try {
        const consumerId = req.params.id;
        if (consumerId) {
            const consumerExisted = await Consumer.findById(consumerId);
            if (!consumerExisted) {
                return res.status(404).json({message: "Consumer Not Found!"});
            }
        } else {
            return res.status(404).json({message: "Consumer Id Not Found!"});
        }
        const consumer = await Consumer.findById(consumerId);
        return res.status(200).json(consumer);
    } catch (error) {
        console.log("Error in getConsumerById controller", error);
        return res.status(500).json({ message: "Internal Server Error", err: error.message });
    }
}

export const createConsumer = async (req, res) => {
    try {
        const {name, service_no, email, phone, aadhar_no, first_payment, first_payment_date, total_project_cost, reference} = req.body;
        console.log(reference);
        const consumer = new Consumer({name, service_no, email, phone, aadhar_no, first_payment, first_payment_date, total_project_cost, reference});
        const savedConsumer = await consumer.save();
        return res.status(201).json({message: "Consumer Created Successfully!", data: savedConsumer});
    } catch (error) {
        console.log("Error in createConsumer controller", error);
        return res.status(500).json({ message: "Internal Server Error", err: error.message });
    }
}

export const updateConsumer = async (req, res) => {
    try {
        const consumerId = req.params.id;
        if (consumerId) {
            const consumerExisted = await Loan.findById(consumerId);
            if (!consumerExisted) {
                return res.status(404).json({message: "Consumer Not Found!"});
            }
        } else {
            return res.status(404).json({message: "Consumer Id Not Found!"});
        }
        const {
            name, 
            service_no, 
            email, 
            phone, 
            aadhar_no, 
            first_payment, 
            first_payment_date,
            second_payment,
            second_payment_date,
            margin_amount,
            margin_amount_date,
            total_project_cost,
            reference
        } = req.body;
        const updatedConsumer = await Consumer.findByIdAndUpdate(req.params.id, {
            name, 
            service_no, 
            email, 
            phone, 
            aadhar_no, 
            first_payment, 
            first_payment_date,
            second_payment,
            second_payment_date,
            margin_amount,
            margin_amount_date,
            total_project_cost,
            reference
        }, {new: true});
        if (!updatedConsumer) return res.status(404).json({message: "Consumer Not Found!"});
        return res.status(200).json({message: "Consumer Updated Successfully!", data: updatedConsumer});
    } catch (error) {
        console.log("Error in updateConsumer controller", error);
        return res.status(500).json({ message: "Internal Server Error", err: error.message });
    }
}

export const deleteConsumer = async (req, res) => {
    try {
        const consumerId = req.params.id;
        if (consumerId) {
            const consumerExisted = await Consumer.findById(consumerId);
            if (!consumerExisted) {
                return res.status(404).json({message: "Consumer Not Found!"});
            }
        } else {
            return res.status(404).json({message: "Consumer Id Not Found!"});
        }
        const deletedConsumer = await Consumer.findByIdAndDelete(consumerId);
        if (!deletedConsumer) return res.status(404).json({message: "Consumer Not Found!"});
        return res.status(200).json({message: "Consumer Deleted Successfully!"});
    } catch (error) {
        console.log("Error in deleteConsumer controller", error);
        return res.status(500).json({ message: "Internal Server Error", err: error.message });
    }
}