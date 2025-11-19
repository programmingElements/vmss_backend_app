import express from "express";
import { createConsumer, deleteConsumer, getAllConsumers, getConsumerById, updateConsumer } from "../controllers/consumerControllers.js";

const router = express.Router();

router.route("/").get(getAllConsumers);
router.route("/:id").get(getConsumerById);
router.route("/").post(createConsumer);
router.route("/:id").put(updateConsumer);
router.route("/:id").delete(deleteConsumer);

export default router;