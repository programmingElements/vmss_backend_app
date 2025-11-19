import express from "express";
import { createDealer,updateDealer,getAllDealers,getDealerById } from "../controllers/dealerControllers.js";

const router = express.Router();

router.route("/").get(getAllDealers);
router.route("/:id").get(getDealerById);
router.route("/").post(createDealer);
router.route("/:id").put(updateDealer);

export default router;