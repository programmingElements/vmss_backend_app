import express from "express";
import { handleUserSignup } from "../controllers/userControllers.js";

const router = express.Router();

router.route("/").post(handleUserSignup);

export default router;